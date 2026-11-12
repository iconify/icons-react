import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1hhj_bjg.css';
import '../../css/d/dqjf3aboz.css';
import '../../css/k/k_ecp0b1i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1hhj_bjg"/><path class="dqjf3aboz"/><path class="k_ecp0b1i"/>`,
		"fallback": "selfhst:stencilbox",
	});
}

export default Component;
