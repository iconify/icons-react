import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/otobglbfo.css';
import '../../css/w/whfc_wblo.css';
import '../../css/a/amcfhfbkw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="otobglbfo"/><path class="whfc_wblo"/><path clip-rule="evenodd" class="amcfhfbkw"/></g>`,
		"fallback": "glyphs-poly:microphone-2",
	});
}

export default Component;
