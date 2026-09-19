import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zmtno6blu.css';
import '../../css/t/txu5b4k-p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zmtno6blu"/><path class="txu5b4k-p"/></g>`,
		"fallback": "glyphs:speedometer-3",
	});
}

export default Component;
