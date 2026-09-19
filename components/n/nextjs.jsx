import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xknpqhb_d.css';
import '../../css/u/ulvs14top.css';
import '../../css/l/l9n7ogzby.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/s/stui2mbih.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="xknpqhb_d"/><path fill="url(#SVGt8hikeFb)" class="ulvs14top"/><path fill="url(#SVGffgZzcDK)" class="l9n7ogzby"/><defs><linearGradient id="SVGt8hikeFb" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop class="vc--wpv5i"/><stop offset="1" class="stui2mbih"/></linearGradient><linearGradient id="SVGffgZzcDK" x1="121" x2="120.799" y1="54" y2="106.875" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop class="vc--wpv5i"/><stop offset="1" class="stui2mbih"/></linearGradient></defs>`,
		"fallback": "devicon:nextjs",
	});
}

export default Component;
