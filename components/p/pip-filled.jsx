import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_wuukbdi.css';
import '../../css/q/qvktie0-n.css';
import '../../css/p/p0kcvcc8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x_wuukbdi"/><path class="qvktie0-n"/><path class="p0kcvcc8c"/></g>`,
		"fallback": "andrsrxn:pip-filled",
	});
}

export default Component;
