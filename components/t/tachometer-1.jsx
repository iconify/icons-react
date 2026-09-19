import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jwu_f6b9n.css';
import '../../css/c/c__hxy7lt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jwu_f6b9n"/><path class="c__hxy7lt"/></g>`,
		"fallback": "glyphs:tachometer-1",
	});
}

export default Component;
