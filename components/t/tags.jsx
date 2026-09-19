import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kiog8bb9w.css';
import '../../css/a/aaib_ftaz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kiog8bb9w"/><path class="aaib_ftaz"/></g>`,
		"fallback": "glyphs:tags",
	});
}

export default Component;
