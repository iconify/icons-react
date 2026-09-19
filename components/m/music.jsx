import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/umba3fbov.css';
import '../../css/z/zg5v-0b4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="umba3fbov"/><path class="zg5v-0b4w"/></g>`,
		"fallback": "hugeicons:music",
	});
}

export default Component;
