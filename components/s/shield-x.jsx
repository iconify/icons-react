import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/h/hzp9iubua.css';
import '../../css/l/ljle26bnk.css';
import '../../css/n/nm122tbnn.css';
import '../../css/g/gs66p77ly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGRlhuzCkJ" x1="9" x2="15" y1="1.52" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGRlhuzCkJ)" class="hzp9iubua"/><path class="ljle26bnk wm-shine"/><path class="nm122tbnn wm-shine"/><path class="gs66p77ly wm-shine"/></g>`,
		"fallback": "withicons-utsav:shield-x",
	});
}

export default Component;
