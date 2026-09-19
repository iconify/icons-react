import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/unvvrib7k.css';
import '../../css/i/i0ly9nmio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="unvvrib7k"/><path class="i0ly9nmio"/></g>`,
		"fallback": "iconamoon:mouse",
	});
}

export default Component;
