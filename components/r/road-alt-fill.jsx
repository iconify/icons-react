import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c5l763z2q.css';
import '../../css/d/d_jptcbej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c5l763z2q"/><path class="d_jptcbej"/></g>`,
		"fallback": "lets-icons:road-alt-fill",
	});
}

export default Component;
