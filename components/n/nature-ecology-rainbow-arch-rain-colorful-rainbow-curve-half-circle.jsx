import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/f74h0ybep.css';
import '../../css/c/clly3ubxy.css';
import '../../css/o/o9u649gzc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="f74h0ybep"/><path class="clly3ubxy"/><path class="o9u649gzc"/></g>`,
		"fallback": "streamline:nature-ecology-rainbow-arch-rain-colorful-rainbow-curve-half-circle",
	});
}

export default Component;
