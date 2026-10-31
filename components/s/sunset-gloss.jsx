import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w3xgh7v-x.css';
import '../../css/t/t13cg_bqv.css';
import '../../css/y/yix0xqbak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="w3xgh7v-x wm-k"/><path class="t13cg_bqv wm-a"/><path class="wm-s yix0xqbak"/></g>`,
		"fallback": "withicons:sunset-gloss",
	});
}

export default Component;
