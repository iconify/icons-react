import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q2iciacjh.css';
import '../../css/e/e288spbik.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="q2iciacjh"/><path class="e288spbik"/></g>`,
		"fallback": "glyphs:signal-bold",
	});
}

export default Component;
