import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hyvc97btq.css';
import '../../css/h/hm_s1kx4n.css';
import '../../css/y/y8umtvvdr.css';
import '../../css/z/z_9yqfbzq.css';
import '../../css/p/pw8f5c0fp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hyvc97btq"/><path class="hm_s1kx4n"/><path class="y8umtvvdr"/><path class="z_9yqfbzq"/><path class="pw8f5c0fp"/></g>`,
		"fallback": "solar:sheet-linear",
	});
}

export default Component;
