import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z5xip-8wa.css';
import '../../css/l/l6epnabnm.css';
import '../../css/v/vkkt7ybvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z5xip-8wa"/><path class="l6epnabnm"/><path class="vkkt7ybvn"/></g>`,
		"fallback": "keyline-icons:server-two-tone",
	});
}

export default Component;
