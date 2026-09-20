import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wupa1pddf.css';
import '../../css/p/pzbh89bvj.css';
import '../../css/r/rfg1cnq_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wupa1pddf"/><path class="pzbh89bvj"/><path class="rfg1cnq_s"/></g>`,
		"fallback": "streamline-ultimate:saving-dog-guard-decrease",
	});
}

export default Component;
