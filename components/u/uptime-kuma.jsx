import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9jw2obzx.css';
import '../../css/t/tr0fwwk_h.css';
import '../../css/n/n-g7knw5a.css';

const viewBox = {"width":622,"height":622};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGbbyaXLZe" x1="-82.4" x2="121.67" y1="753.919" y2="949.259" gradientTransform="translate(320.001 -488)" gradientUnits="userSpaceOnUse"><stop offset="0" class="h9jw2obzx"/><stop offset="1" class="tr0fwwk_h"/></linearGradient><path fill="url(#SVGbbyaXLZe)" class="n-g7knw5a"/>`,
		"fallback": "selfhst:uptime-kuma",
	});
}

export default Component;
