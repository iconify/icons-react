import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w6nrzybab.css';
import '../../css/j/j0r_clpwb.css';
import '../../css/o/obesz9_hf.css';
import '../../css/v/v6-odob5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w6nrzybab"/><path class="j0r_clpwb"/><path class="obesz9_hf"/><path class="v6-odob5a"/></g>`,
		"fallback": "andrsrxn:wallet",
	});
}

export default Component;
