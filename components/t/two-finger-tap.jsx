import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uoz-68uic.css';
import '../../css/s/s55yt340w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="uoz-68uic"/><path class="s55yt340w"/></g>`,
		"fallback": "streamline:two-finger-tap",
	});
}

export default Component;
