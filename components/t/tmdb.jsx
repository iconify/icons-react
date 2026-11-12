import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbhh_cjyv.css';
import '../../css/v/vopj28bjv.css';
import '../../css/b/by6ghcj9t.css';
import '../../css/q/qgw5xlb2o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGZsPISboe" x2="512" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="nbhh_cjyv"/><stop offset=".56" class="vopj28bjv"/><stop offset="1" class="by6ghcj9t"/></linearGradient><path fill="url(#SVGZsPISboe)" class="qgw5xlb2o"/>`,
		"fallback": "selfhst:tmdb",
	});
}

export default Component;
