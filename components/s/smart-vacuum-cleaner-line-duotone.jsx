import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/smmug3biq.css';
import '../../css/h/htapwebmh.css';
import '../../css/g/gshkn9qqt.css';
import '../../css/s/srug0hb7t.css';
import '../../css/w/wyvi3vbxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="smmug3biq"/><path class="htapwebmh"/><path class="gshkn9qqt"/><path class="srug0hb7t"/><path class="wyvi3vbxo"/></g>`,
		"fallback": "solar:smart-vacuum-cleaner-line-duotone",
	});
}

export default Component;
