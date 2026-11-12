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
		"content": `<path class="kt-r8b3tw"/><linearGradient id="SVGe5QvdbLc" x1="149.9" x2="468.2" y1="415.1" y2="96.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="ckmztbc7a"/><stop offset=".994" class="cky9negol"/></linearGradient><path fill="url(#SVGe5QvdbLc)" class="s5vh77buj"/>`,
		"fallback": "selfhst:microsoft-to-do",
	});
}

export default Component;
