import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1w56ebrl.css';
import '../../css/c/c0xyygbvy.css';
import '../../css/u/u1e8aucpo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG591VZcVx" x1="-25.047" x2="537.047" y1="93.737" y2="418.263" gradientUnits="userSpaceOnUse"><stop offset="0" class="v1w56ebrl"/><stop offset="1" class="c0xyygbvy"/></linearGradient><path fill="url(#SVG591VZcVx)" class="u1e8aucpo"/>`,
		"fallback": "selfhst:strava-dark",
	});
}

export default Component;
