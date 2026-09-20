import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/txnxxrbsu.css';
import '../../css/s/sru-zf9lv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="txnxxrbsu"/><path clip-rule="evenodd" class="sru-zf9lv"/></g>`,
		"fallback": "nrk:thumbs-up-solid-expressive",
	});
}

export default Component;
