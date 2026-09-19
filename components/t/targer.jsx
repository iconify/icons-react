import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/aqvjohjml.css';
import '../../css/b/bt2rj5bxf.css';
import '../../css/p/p6iw0hdbg.css';
import '../../css/l/ln_sv0i2d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><ellipse class="aqvjohjml"/><path class="bt2rj5bxf"/><path class="p6iw0hdbg"/><path class="ln_sv0i2d"/></g>`,
		"fallback": "si-glyph:targer",
	});
}

export default Component;
