import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dais_ibqj.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dais_ibqj"/>`,
		"fallback": "whh:skrill",
	});
}

export default Component;
