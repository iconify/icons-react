import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xyqs51b7j.css';
import '../../css/g/g8ld_8bog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xyqs51b7j"/><path class="g8ld_8bog"/></g>`,
		"fallback": "iconoir:pen-tablet",
	});
}

export default Component;
