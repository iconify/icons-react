import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6_r6x8xh.css';
import '../../css/h/hkoftybrd.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6_r6x8xh"/><path class="hkoftybrd"/>`,
		"fallback": "tabler-flags:nordic-council",
	});
}

export default Component;
