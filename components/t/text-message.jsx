import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/t/touwh4qiv.css';
import '../../css/o/o3s4t6bkh.css';
import '../../css/i/i8y_5tc4i.css';
import '../../css/d/dglhzfijr.css';
import '../../css/b/bnw6d5nlc.css';
import '../../css/o/oibgboowi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="touwh4qiv"/><path class="o3s4t6bkh"/><path class="i8y_5tc4i"/><path class="dglhzfijr"/><path class="bnw6d5nlc"/><path class="oibgboowi"/></g>`,
		"fallback": "icon-park:text-message",
	});
}

export default Component;
