import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/c/c11zejbed.css';
import '../../css/q/qx32gdm7x.css';
import '../../css/c/cgr3ne-9x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGtt0I4dom" x1="256" x2="256" y1="512" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".964" class="c11zejbed"/><stop offset="1" class="qx32gdm7x"/></linearGradient><path fill="url(#SVGtt0I4dom)" class="cgr3ne-9x"/>`,
		"fallback": "selfhst:sveltia-cms-light",
	});
}

export default Component;
