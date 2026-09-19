import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fl7uez04s.css';
import '../../css/g/gd_qglxwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fl7uez04s"/><path class="gd_qglxwy"/></g>`,
		"fallback": "hugeicons:panel-left-close",
	});
}

export default Component;
