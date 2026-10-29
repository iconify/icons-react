import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kbz71jyrz.css';
import '../../css/p/perttu9bq.css';
import '../../css/r/ri2oegbdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kbz71jyrz"/><path class="perttu9bq wm-a"/><path class="ri2oegbdi"/></g>`,
		"fallback": "withicons:receipt-duo",
	});
}

export default Component;
