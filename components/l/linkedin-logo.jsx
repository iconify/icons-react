import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c3cq-mbaa.css';
import '../../css/q/q8bs69b5n.css';
import '../../css/c/cyxiq1l7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c3cq-mbaa"/><path class="q8bs69b5n"/><path class="cyxiq1l7s"/></g>`,
		"fallback": "streamline-ultimate-color:linkedin-logo",
	});
}

export default Component;
