import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bmoag8dta.css';
import '../../css/u/uyqlyjidv.css';
import '../../css/g/g6i-4jbqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bmoag8dta"/><path class="uyqlyjidv"/><path class="g6i-4jbqy"/></g>`,
		"fallback": "andrsrxn:waves-whale",
	});
}

export default Component;
