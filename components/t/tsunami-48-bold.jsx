import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqc6deukf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqc6deukf"/>`,
		"fallback": "energy-icons:tsunami-48-bold",
	});
}

export default Component;
