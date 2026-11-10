import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kceq0bbfs.css';
import '../../css/o/onutncc0z.css';
import '../../css/s/s3330sbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kceq0bbfs"/><path class="onutncc0z"/><path class="s3330sbyk"/></g>`,
		"fallback": "andrsrxn:screenshot-horizontal",
	});
}

export default Component;
