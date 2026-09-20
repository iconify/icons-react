import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/t/tb9i-5hiz.css';
import '../../css/k/kutl9dbta.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGBlvrbcbQ" x1="48.154" x2="115.519" y1="575.296" y2="408.562" gradientTransform="matrix(2.8479 0 0 -2.8498 18.771 1647.394)" gradientUnits="userSpaceOnUse"><stop offset=".01" class="vc--wpv5i"/><stop offset="1" class="tb9i-5hiz"/></linearGradient><path fill="url(#SVGBlvrbcbQ)" class="kutl9dbta"/>`,
		"fallback": "selfhst:vaultls-light",
	});
}

export default Component;
