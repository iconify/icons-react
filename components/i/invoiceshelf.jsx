import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1j9atbnx.css';
import '../../css/x/xxyaynvxj.css';
import '../../css/m/mrehdqb2u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGDFHYcdvA" x1="21.252" x2="490.748" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="d1j9atbnx"/><stop offset="1" class="xxyaynvxj"/></linearGradient><path fill="url(#SVGDFHYcdvA)" class="mrehdqb2u"/>`,
		"fallback": "selfhst:invoiceshelf",
	});
}

export default Component;
