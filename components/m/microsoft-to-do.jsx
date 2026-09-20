import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt-r8b3tw.css';
import '../../css/c/ckmztbc7a.css';
import '../../css/c/cky9negol.css';
import '../../css/s/s5vh77buj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt-r8b3tw"/><linearGradient id="SVGUWtUKbEh" x1="157.99" x2="476.24" y1="811.473" y2="493.224" gradientTransform="translate(-8.065 -396.349)" gradientUnits="userSpaceOnUse"><stop offset="0" class="ckmztbc7a"/><stop offset=".994" class="cky9negol"/></linearGradient><path fill="url(#SVGUWtUKbEh)" class="s5vh77buj"/>`,
		"fallback": "selfhst:microsoft-to-do",
	});
}

export default Component;
