import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b--d9k_8s.css';
import '../../css/c/cv1idlb-d.css';
import '../../css/i/iey6_0bbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b--d9k_8s"/><path class="cv1idlb-d"/><path class="iey6_0bbr"/></g>`,
		"fallback": "streamline-ultimate:medical-instrument-walking-aid",
	});
}

export default Component;
