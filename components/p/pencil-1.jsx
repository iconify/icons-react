import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mcz2a8bsd.css';
import '../../css/q/qagdjebam.css';
import '../../css/c/c6eoz-bnz.css';
import '../../css/v/v89bqvxpp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mcz2a8bsd"/><path clip-rule="evenodd" class="qagdjebam"/><path clip-rule="evenodd" class="c6eoz-bnz"/><path class="v89bqvxpp"/></g>`,
		"fallback": "glyphs-poly:pencil-1",
	});
}

export default Component;
