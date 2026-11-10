import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eseit_bqy.css';
import '../../css/a/akpdqcbef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eseit_bqy"/><path class="akpdqcbef"/></g>`,
		"fallback": "andrsrxn:pencil-off",
	});
}

export default Component;
