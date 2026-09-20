import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gnp12_bss.css';
import '../../css/z/zswy68bvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gnp12_bss"/><path class="zswy68bvx"/></g>`,
		"fallback": "stash:social-whatsapp-light",
	});
}

export default Component;
