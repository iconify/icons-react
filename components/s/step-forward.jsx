import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jif95bbcf.css';
import '../../css/t/tia2v6b-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jif95bbcf"/><path class="tia2v6b-i"/></g>`,
		"fallback": "andrsrxn:step-forward",
	});
}

export default Component;
