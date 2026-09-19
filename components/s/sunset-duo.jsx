import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kew7uwb2k.css';
import '../../css/e/eo8q52bph.css';
import '../../css/y/yvf29-bfi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kew7uwb2k"/><path class="eo8q52bph"/><path class="yvf29-bfi"/></g>`,
		"fallback": "glyphs:sunset-duo",
	});
}

export default Component;
