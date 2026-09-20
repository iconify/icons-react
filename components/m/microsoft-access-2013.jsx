import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzzrkcbkr.css';
import '../../css/b/br9w1p-3j.css';
import '../../css/f/f1rvq9znx.css';
import '../../css/o/o7u1ickii.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGYblfTbNu" x1="256" x2="256" y1="13.792" y2="498.208" gradientUnits="userSpaceOnUse"><stop offset="0" class="uzzrkcbkr"/><stop offset="1" class="br9w1p-3j"/></linearGradient><path fill="url(#SVGYblfTbNu)" class="f1rvq9znx"/><path class="o7u1ickii"/>`,
		"fallback": "selfhst:microsoft-access-2013",
	});
}

export default Component;
