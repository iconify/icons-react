import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m0-be3bja.css';
import '../../css/k/kqfoc8b5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m0-be3bja"/><path class="kqfoc8b5p"/></g>`,
		"fallback": "hugeicons:linkedin-02",
	});
}

export default Component;
