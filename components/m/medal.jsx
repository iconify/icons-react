import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/c/c9eqzcj_t.css';
import '../../css/s/smfayekib.css';
import '../../css/n/n79n4-xiv.css';
import '../../css/e/e52orn_mw.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="c9eqzcj_t"/><path class="smfayekib"/><path class="n79n4-xiv"/><path class="e52orn_mw"/></g>`,
		"fallback": "streamline-stickies-color:medal",
	});
}

export default Component;
