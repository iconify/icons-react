import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxwyg-nau.css';
import '../../css/b/bsmo95b2x.css';
import '../../css/g/gquevqb_d.css';
import '../../css/o/ohcc56b0j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="oxwyg-nau"/><path class="bsmo95b2x"/><path class="gquevqb_d"/><path class="ohcc56b0j"/></g>`,
		"fallback": "streamline-flex-color:paintbrush-2",
	});
}

export default Component;
