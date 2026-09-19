import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dm6lxrfug.css';
import '../../css/n/n94865b_n.css';
import '../../css/f/fbiosebgy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dm6lxrfug"/><path clip-rule="evenodd" class="n94865b_n"/><path class="fbiosebgy"/></g>`,
		"fallback": "glyphs:pin-bold",
	});
}

export default Component;
