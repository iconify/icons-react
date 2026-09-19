import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tutkuq7az.css';
import '../../css/g/gdcx7ybdy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tutkuq7az"/><path class="gdcx7ybdy"/></g>`,
		"fallback": "glyphs:king-outline",
	});
}

export default Component;
