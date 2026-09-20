import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysv057b-z.css';
import '../../css/d/dnsn47b2x.css';
import '../../css/i/iuv2rsb_l.css';
import '../../css/i/i5ty4t3jd.css';
import '../../css/d/dh0nbubnx.css';
import '../../css/e/ehhyqmbxe.css';

const viewBox = {"width":390,"height":47};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysv057b-z"/><path class="dnsn47b2x"/><path class="iuv2rsb_l"/><path class="i5ty4t3jd"/><path clip-rule="evenodd" class="dh0nbubnx"/><path class="ehhyqmbxe"/>`,
		"fallback": "thesvg-color:usps",
	});
}

export default Component;
