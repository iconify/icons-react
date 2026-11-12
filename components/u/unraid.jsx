import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6b8rw7da.css';
import '../../css/v/v6i8d8bmx.css';
import '../../css/j/jk3br8gfw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGsgPgkebL" x1="91.1" x2="421" y1="420.8" y2="90.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="m6b8rw7da"/><stop offset="1" class="v6i8d8bmx"/></linearGradient><path fill="url(#SVGsgPgkebL)" class="jk3br8gfw"/>`,
		"fallback": "selfhst:unraid",
	});
}

export default Component;
