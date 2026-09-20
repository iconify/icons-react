import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrl71abcz.css';
import '../../css/i/ilzd2fb8z.css';
import '../../css/a/afvuxlb2w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG1IsLgDEn" x1="93.945" x2="163.305" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="xrl71abcz"/><stop offset="1" class="ilzd2fb8z"/></linearGradient><path fill="url(#SVG1IsLgDEn)" class="afvuxlb2w"/>`,
		"fallback": "selfhst:mantrae",
	});
}

export default Component;
