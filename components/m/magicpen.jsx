import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/enc0cpj_k.css';
import '../../css/a/az9oaz1lg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="enc0cpj_k"/><path class="az9oaz1lg"/></g>`,
		"fallback": "reicon:magicpen",
	});
}

export default Component;
