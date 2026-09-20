import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwiwzfbxe.css';
import '../../css/z/z_hfrbcss.css';
import '../../css/f/fsg0cfggo.css';
import '../../css/g/gitftzdpx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGJDYijb5u" x1="-695.157" x2="-695.157" y1="789.583" y2="792.749" gradientTransform="matrix(115 0 0 -115 80199 91314)" gradientUnits="userSpaceOnUse"><stop offset="0" class="mwiwzfbxe"/><stop offset="1" class="z_hfrbcss"/></linearGradient><path fill="url(#SVGJDYijb5u)" class="fsg0cfggo"/><path class="gitftzdpx"/>`,
		"fallback": "selfhst:string-is",
	});
}

export default Component;
