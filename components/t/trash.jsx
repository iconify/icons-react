import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g47-l3b8m.css';
import '../../css/b/bna0qhlzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g47-l3b8m"/><ellipse class="bna0qhlzy"/></g>`,
		"fallback": "akar-icons:trash",
	});
}

export default Component;
