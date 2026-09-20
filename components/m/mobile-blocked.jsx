import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z1t582b-q.css';
import '../../css/t/t3ojccldl.css';
import '../../css/d/duyy9ac2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z1t582b-q"/><path class="t3ojccldl"/><path class="duyy9ac2a"/></g>`,
		"fallback": "tdesign:mobile-blocked",
	});
}

export default Component;
