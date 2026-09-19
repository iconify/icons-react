import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zxzj8hbbj.css';
import '../../css/h/h6ozxsbqq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zxzj8hbbj"/><path class="h6ozxsbqq"/></g>`,
		"fallback": "glyphs:race-car",
	});
}

export default Component;
