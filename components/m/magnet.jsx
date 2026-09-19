import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i76-0zyzg.css';
import '../../css/n/n7m4jv-wg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i76-0zyzg"/><path class="n7m4jv-wg"/></g>`,
		"fallback": "iconoir:magnet",
	});
}

export default Component;
