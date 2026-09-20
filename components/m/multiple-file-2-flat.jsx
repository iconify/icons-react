import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o52-iy1vn.css';
import '../../css/o/ol_nl5bzg.css';
import '../../css/b/b2_c8s4io.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o52-iy1vn"/><path class="ol_nl5bzg"/><path clip-rule="evenodd" class="b2_c8s4io"/></g>`,
		"fallback": "streamline-color:multiple-file-2-flat",
	});
}

export default Component;
