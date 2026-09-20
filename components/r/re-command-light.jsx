import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/k/krzr9662y.css';
import '../../css/s/sbrlsg32p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGkCsT8dGV" x1="-695.575" x2="-519.089" y1="422.325" y2="327.556" gradientTransform="rotate(105.001 1263.195 108.381)scale(-2.8347 2.8347)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="pnjr8_b7e"/></linearGradient><path fill="url(#SVGkCsT8dGV)" class="krzr9662y"/><path class="sbrlsg32p"/>`,
		"fallback": "selfhst:re-command-light",
	});
}

export default Component;
