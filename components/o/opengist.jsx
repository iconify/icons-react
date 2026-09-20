import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th81w-wav.css';
import '../../css/w/wvtn6fmsa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th81w-wav"/><path class="wvtn6fmsa"/>`,
		"fallback": "selfhst:opengist",
	});
}

export default Component;
