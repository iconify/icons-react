import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c7_ov50_s.css';
import '../../css/y/y5tm36cko.css';
import '../../css/d/dllr7fbiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="c7_ov50_s"/><path class="y5tm36cko"/><path class="dllr7fbiz"/></g>`,
		"fallback": "hugeicons:tag-02",
	});
}

export default Component;
