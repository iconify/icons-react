import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4f4eeb9g.css';
import '../../css/e/evlqlmbrr.css';
import '../../css/o/o9dcfwc7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f4f4eeb9g"/><path class="evlqlmbrr"/><path class="o9dcfwc7y"/></g>`,
		"fallback": "tdesign:questionnaire-double",
	});
}

export default Component;
