import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9kdg6bkq.css';
import '../../css/g/gnywu4dva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z9kdg6bkq"/><path class="gnywu4dva"/></g>`,
		"fallback": "tdesign:system-blocked",
	});
}

export default Component;
