import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z8y3_li4u.css';
import '../../css/i/isgk1cbzs.css';
import '../../css/v/v0pxqrbkc.css';
import '../../css/c/cecu30bpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="z8y3_li4u"/><path class="isgk1cbzs"/><path class="v0pxqrbkc"/><path class="cecu30bpe"/></g>`,
		"fallback": "hugeicons:lamp-desk",
	});
}

export default Component;
