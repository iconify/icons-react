import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fcvxr4fnn.css';
import '../../css/o/o9ljgk76w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fcvxr4fnn"/><path class="o9ljgk76w"/></g>`,
		"fallback": "glyphs:mushroom",
	});
}

export default Component;
