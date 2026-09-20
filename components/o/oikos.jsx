import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqlfp6b_k.css';
import '../../css/g/gootyobsn.css';
import '../../css/o/o9kcq2a5i.css';
import '../../css/e/esza_dbdg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGEVehvvAE" x1="0" x2="512" y1="514" y2="2" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="gqlfp6b_k"/><stop offset="1" class="gootyobsn"/></linearGradient><path fill="url(#SVGEVehvvAE)" class="o9kcq2a5i"/><path class="esza_dbdg"/>`,
		"fallback": "selfhst:oikos",
	});
}

export default Component;
