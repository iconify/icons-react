import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kckc1iwlf.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/w/w71jzib9m.css';
import '../../css/f/f-c80ro0i.css';
import '../../css/m/mno0o_bwq.css';
import '../../css/z/zfju5wbrh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGun0XkcrF" x1="0" x2="512" y1="258" y2="258" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="kckc1iwlf"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGun0XkcrF)" class="w71jzib9m"/><linearGradient id="SVGm0VuwdJn" x1="-35.788" x2="547.745" y1="89.586" y2="426.489" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="f-c80ro0i"/><stop offset="1" class="mno0o_bwq"/></linearGradient><path fill="url(#SVGm0VuwdJn)" class="zfju5wbrh"/>`,
		"fallback": "selfhst:nextexplorer-light",
	});
}

export default Component;
