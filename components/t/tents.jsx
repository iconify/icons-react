import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhoh9byhl.css';
import '../../css/g/gca746gmf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhoh9byhl"/><path class="gca746gmf"/>`,
		"fallback": "temaki:tents",
	});
}

export default Component;
