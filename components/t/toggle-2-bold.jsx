import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xlqum1bag.css';
import '../../css/n/n5zgs7bnq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="xlqum1bag"/><rect class="n5zgs7bnq"/></g>`,
		"fallback": "glyphs:toggle-2-bold",
	});
}

export default Component;
