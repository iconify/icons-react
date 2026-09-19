import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kvcz6ibzf.css';
import '../../css/n/nml985etk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kvcz6ibzf"/><path class="nml985etk"/></g>`,
		"fallback": "glyphs:planet-moon-outline",
	});
}

export default Component;
