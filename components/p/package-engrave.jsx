import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m3fhfrafa.css';
import '../../css/s/srec5cclg.css';
import '../../css/r/rojp4pxea.css';
import '../../css/a/a91ndtnyb.css';
import '../../css/s/sqx3j0bau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="m3fhfrafa wm-k"/><path class="srec5cclg wm-shadow"/><path class="rojp4pxea wm-k"/><path class="a91ndtnyb wm-k"/><path class="sqx3j0bau wm-a"/></g>`,
		"fallback": "withicons:package-engrave",
	});
}

export default Component;
