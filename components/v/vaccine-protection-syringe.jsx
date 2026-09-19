import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/brz87i4nf.css';
import '../../css/q/qnvt8pbsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="brz87i4nf"/><path class="qnvt8pbsc"/></g>`,
		"fallback": "covid:vaccine-protection-syringe",
	});
}

export default Component;
