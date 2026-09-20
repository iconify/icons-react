import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b32c94l0u.css';
import '../../css/b/b28hxqbqh.css';
import '../../css/v/v-evtzw3i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="b32c94l0u"/><path class="b28hxqbqh"/><path class="v-evtzw3i"/></g>`,
		"fallback": "streamline-flex:mail-reply-all",
	});
}

export default Component;
