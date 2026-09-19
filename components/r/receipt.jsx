import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s8x7i_bes.css';
import '../../css/h/h69o561-p.css';
import '../../css/v/v5qih58fr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s8x7i_bes"/><path class="h69o561-p"/><path class="v5qih58fr"/></g>`,
		"fallback": "glyphs-poly:receipt",
	});
}

export default Component;
