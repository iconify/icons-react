import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/ckzu53bpo.css';
import '../../css/p/pwm306-zi.css';
import '../../css/i/ifx_q8b8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ckzu53bpo"/><path class="pwm306-zi"/><path class="ifx_q8b8t"/></g>`,
		"fallback": "streamline-ultimate:monetization-tablet",
	});
}

export default Component;
