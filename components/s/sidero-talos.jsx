import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg3-byxey.css';
import '../../css/k/kgk8yebfr.css';
import '../../css/s/skjcx2zsr.css';
import '../../css/m/mb3jj0jmu.css';
import '../../css/r/rgtfcgf7o.css';
import '../../css/b/bqs-bnbhg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGecmlQb0i" x1="36.973" x2="429.154" y1="413.633" y2="413.633" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="qg3-byxey"/><stop offset=".615" class="kgk8yebfr"/><stop offset="1" class="skjcx2zsr"/></linearGradient><path fill="url(#SVGecmlQb0i)" class="mb3jj0jmu"/><linearGradient id="SVG6pq8VdeI" x1="16.433" x2="212.524" y1="393.632" y2="53.993" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="qg3-byxey"/><stop offset=".615" class="kgk8yebfr"/><stop offset="1" class="skjcx2zsr"/></linearGradient><path fill="url(#SVG6pq8VdeI)" class="rgtfcgf7o"/><linearGradient id="SVG6fyfHbdi" x1="276.735" x2="472.825" y1="13.723" y2="353.363" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="qg3-byxey"/><stop offset=".615" class="kgk8yebfr"/><stop offset="1" class="skjcx2zsr"/></linearGradient><path fill="url(#SVG6fyfHbdi)" class="bqs-bnbhg"/>`,
		"fallback": "selfhst:sidero-talos",
	});
}

export default Component;
