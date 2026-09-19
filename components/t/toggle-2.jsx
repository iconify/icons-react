import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zct5zxqrj.css';
import '../../css/p/p7wva45sy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zct5zxqrj"/><path class="p7wva45sy"/></g>`,
		"fallback": "glyphs:toggle-2",
	});
}

export default Component;
