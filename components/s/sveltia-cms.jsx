import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nevdhvban.css';
import '../../css/u/uf2jbbjuc.css';
import '../../css/d/dbdsqp72f.css';
import '../../css/u/uesc6mmwn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGPmN2DdrF" x1="256" x2="256" y1="514" y2="2" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="nevdhvban"/><stop offset="1" class="uf2jbbjuc"/></linearGradient><path fill="url(#SVGPmN2DdrF)" class="dbdsqp72f"/><path class="uesc6mmwn"/>`,
		"fallback": "selfhst:sveltia-cms",
	});
}

export default Component;
