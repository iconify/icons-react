import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfbsps-lm.css';
import '../../css/d/dj56hf47g.css';
import '../../css/c/ci2nsc7wj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGksseleyt" x1="125.101" x2="386.996" y1="429.111" y2="167.217" gradientUnits="userSpaceOnUse"><stop offset="0" class="hfbsps-lm"/><stop offset="1" class="dj56hf47g"/></linearGradient><path fill="url(#SVGksseleyt)" class="ci2nsc7wj"/>`,
		"fallback": "selfhst:mysterium-node",
	});
}

export default Component;
