import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kgdi7ny9s.css';
import '../../css/p/p5k92nmzp.css';
import '../../css/w/w-3mh5pls.css';
import '../../css/i/ixisdkb9e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kgdi7ny9s"/><path clip-rule="evenodd" class="p5k92nmzp"/><path class="w-3mh5pls"/><path clip-rule="evenodd" class="ixisdkb9e"/></g>`,
		"fallback": "glyphs:shield-exclamation-outline",
	});
}

export default Component;
