import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z50njmb0b.css';
import '../../css/p/pfahbl-ea.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z50njmb0b"/><path class="pfahbl-ea"/></g>`,
		"fallback": "glyphs:phone-remove-duo",
	});
}

export default Component;
