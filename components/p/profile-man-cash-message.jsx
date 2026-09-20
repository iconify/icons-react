import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/iil_g-bem.css';
import '../../css/b/bdn143hpv.css';
import '../../css/u/uevrt6bjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="iil_g-bem"/><path class="bdn143hpv"/><path class="uevrt6bjj"/></g>`,
		"fallback": "streamline-ultimate:profile-man-cash-message",
	});
}

export default Component;
