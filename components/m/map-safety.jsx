import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o980eei6t.css';
import '../../css/h/h-5cioh6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o980eei6t"/><path class="h-5cioh6s"/></g>`,
		"fallback": "tdesign:map-safety",
	});
}

export default Component;
