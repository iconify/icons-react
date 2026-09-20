import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb9i-5hiz.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/u/u1e8aucpo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGArkTYdlF" x1="-25.047" x2="537.047" y1="93.737" y2="418.263" gradientUnits="userSpaceOnUse"><stop offset="0" class="tb9i-5hiz"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGArkTYdlF)" class="u1e8aucpo"/>`,
		"fallback": "selfhst:strava-light",
	});
}

export default Component;
