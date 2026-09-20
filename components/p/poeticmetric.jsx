import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl86f2bik.css';
import '../../css/y/yi6oqccfh.css';
import '../../css/i/iycln-b8i.css';
import '../../css/s/sdo41x55g.css';
import '../../css/q/qyfru4rrf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGJs2WKAFT" x1="0" x2="512" y1="278" y2="790" gradientTransform="translate(0 -278)" gradientUnits="userSpaceOnUse"><stop offset="0" class="dl86f2bik"/><stop offset="1" class="yi6oqccfh"/></linearGradient><circle fill="url(#SVGJs2WKAFT)" class="iycln-b8i"/><path class="sdo41x55g"/><path class="qyfru4rrf"/>`,
		"fallback": "selfhst:poeticmetric",
	});
}

export default Component;
