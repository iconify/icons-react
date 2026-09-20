import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c_eyi7bnb.css';
import '../../css/f/fuu_ni4gt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="c_eyi7bnb"/><path class="fuu_ni4gt"/></g>`,
		"fallback": "streamline:music-note-off-2",
	});
}

export default Component;
