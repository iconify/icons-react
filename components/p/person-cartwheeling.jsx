import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4u8pbwjc.css';
import '../../css/h/hhvthyu9m.css';
import '../../css/f/ftf_v_bxo.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/c/cgxswbbyp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="x4u8pbwjc"><circle class="hhvthyu9m"/><path class="ftf_v_bxo"/></g><g class="x8poo_bjf"><circle class="hhvthyu9m"/><path class="cgxswbbyp"/></g>`,
		"fallback": "openmoji:person-cartwheeling",
	});
}

export default Component;
