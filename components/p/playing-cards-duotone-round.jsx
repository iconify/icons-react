import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/holj0hbyy.css';
import '../../css/b/bmvf06bct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="holj0hbyy"/><path class="bmvf06bct"/></g>`,
		"fallback": "coolicons:playing-cards-duotone-round",
	});
}

export default Component;
