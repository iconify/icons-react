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
		"content": `<linearGradient id="SVGxR7jmcOj" x1="93.9" x2="163.3" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="xrl71abcz"/><stop offset="1" class="ilzd2fb8z"/></linearGradient><path fill="url(#SVGxR7jmcOj)" class="afvuxlb2w"/>`,
		"fallback": "selfhst:tether-traefik",
	});
}

export default Component;
