import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cgfh1zt0t.css';
import '../../css/m/mi8yxabyl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="cgfh1zt0t"/><path class="mi8yxabyl"/></g>`,
		"fallback": "glyphs:stamp",
	});
}

export default Component;
