import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iaq_t8bep.css';
import '../../css/z/z8bv1achu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iaq_t8bep"/><path class="z8bv1achu"/></g>`,
		"fallback": "glyphs:shovel-snow-duo",
	});
}

export default Component;
