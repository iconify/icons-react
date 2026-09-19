import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/krd41pbpp.css';
import '../../css/u/u2lu0e3iz.css';
import '../../css/w/ws4qkkash.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="krd41pbpp"/><path class="u2lu0e3iz"/><path class="ws4qkkash"/></g>`,
		"fallback": "glyphs:night-duo",
	});
}

export default Component;
