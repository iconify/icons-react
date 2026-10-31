import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jezntzhya.css';
import '../../css/p/p-pmhcbxo.css';
import '../../css/t/t6bfzabmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jezntzhya wm-k"/><path class="p-pmhcbxo wm-shine"/><path class="t6bfzabmi wm-shine"/></g>`,
		"fallback": "withicons-lunar:mail-open",
	});
}

export default Component;
