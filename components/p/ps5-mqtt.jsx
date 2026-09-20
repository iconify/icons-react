import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjxoumaot.css';
import '../../css/j/j0dgimlyo.css';
import '../../css/i/iycln-b8i.css';
import '../../css/d/d207gzzih.css';
import '../../css/z/zwx4r_96p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG9EfuaeuR" x1="384.021" x2="127.979" y1="731.74" y2="288.26" gradientTransform="translate(0 -254)" gradientUnits="userSpaceOnUse"><stop offset="0" class="sjxoumaot"/><stop offset="1" class="j0dgimlyo"/></linearGradient><circle fill="url(#SVG9EfuaeuR)" class="iycln-b8i"/><path class="d207gzzih"/><path class="zwx4r_96p"/>`,
		"fallback": "selfhst:ps5-mqtt",
	});
}

export default Component;
