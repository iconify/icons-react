import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hc2jzcwpr.css';
import '../../css/v/v0upu6bwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hc2jzcwpr"/><path class="v0upu6bwg"/></g>`,
		"fallback": "streamline-ultimate:tag-dollar",
	});
}

export default Component;
