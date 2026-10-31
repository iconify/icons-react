import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zigegl92v.css';
import '../../css/s/sgc0k4bzn.css';
import '../../css/s/sb92zfh1v.css';
import '../../css/i/io01yrznx.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zigegl92v"/><path class="sgc0k4bzn"/><path class="sb92zfh1v"/><path class="io01yrznx"/></g>`,
		"fallback": "cif:st",
	});
}

export default Component;
