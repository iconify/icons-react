import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jxmbtqrga.css';
import '../../css/o/o784y1sot.css';
import '../../css/u/u5_tanfri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jxmbtqrga"/><path class="o784y1sot"/><path class="u5_tanfri"/></g>`,
		"fallback": "andrsrxn:shield-lightning",
	});
}

export default Component;
