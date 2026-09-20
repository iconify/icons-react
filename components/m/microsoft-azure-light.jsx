import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvikf_xgb.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/b/bmqf4y-5r.css';
import '../../css/y/yw8ns2ibw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvikf_xgb"/><linearGradient id="SVG5jQOmelE" x1="395.32" x2="263.097" y1="89.142" y2="479.761" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="bmqf4y-5r"/></linearGradient><path fill="url(#SVG5jQOmelE)" class="yw8ns2ibw"/>`,
		"fallback": "selfhst:microsoft-azure-light",
	});
}

export default Component;
