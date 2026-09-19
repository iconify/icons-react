import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kgjfsfbqb.css';
import '../../css/g/gx_6zacmb.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="kgjfsfbqb"/><path class="gx_6zacmb"/></g>`,
		"fallback": "si-glyph:layout-3",
	});
}

export default Component;
