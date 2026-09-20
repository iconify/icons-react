import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nblmpv7jr.css';
import '../../css/b/b8xpfu8ht.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="nblmpv7jr"/><path class="b8xpfu8ht"/></g>`,
		"fallback": "streamline:multiple-file-2",
	});
}

export default Component;
