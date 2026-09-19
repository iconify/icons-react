import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zqhz5k-uj.css';
import '../../css/n/njmfmmnsj.css';
import '../../css/a/a0-uj79up.css';
import '../../css/y/ye6al5vfr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zqhz5k-uj"/><path clip-rule="evenodd" class="njmfmmnsj"/><path class="a0-uj79up"/><path clip-rule="evenodd" class="ye6al5vfr"/></g>`,
		"fallback": "glyphs:note-pad-outline",
	});
}

export default Component;
