import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jfmrt9ber.css';
import '../../css/e/e_pvmjeii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jfmrt9ber"/><path class="e_pvmjeii"/></g>`,
		"fallback": "andrsrxn:numbers",
	});
}

export default Component;
