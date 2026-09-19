import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ac6idnf7c.css';
import '../../css/s/slo6n7ays.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ac6idnf7c"/><path class="slo6n7ays"/></g>`,
		"fallback": "humbleicons:skull",
	});
}

export default Component;
