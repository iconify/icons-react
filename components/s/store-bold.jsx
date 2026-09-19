import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ax9c4lghs.css';
import '../../css/s/shh2lmd7z.css';
import '../../css/k/k0aooyyum.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ax9c4lghs"/><path clip-rule="evenodd" class="shh2lmd7z"/><path clip-rule="evenodd" class="k0aooyyum"/></g>`,
		"fallback": "glyphs:store-bold",
	});
}

export default Component;
