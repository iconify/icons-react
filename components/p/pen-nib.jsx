import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/prlpwhbwu.css';
import '../../css/k/kf9dyobbi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="prlpwhbwu"/><path class="kf9dyobbi"/></g>`,
		"fallback": "glyphs:pen-nib",
	});
}

export default Component;
