import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mz90dcccr.css';
import '../../css/z/z472a114k.css';
import '../../css/n/npibm0n8u.css';
import '../../css/t/twy_ekbpf.css';
import '../../css/p/po0uyhbnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mz90dcccr"/><circle class="z472a114k"/><circle class="npibm0n8u"/><path class="twy_ekbpf"/><path class="po0uyhbnh"/></g>`,
		"fallback": "solar:pallete-2-line-duotone",
	});
}

export default Component;
