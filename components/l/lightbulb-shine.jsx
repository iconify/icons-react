import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vyoff0yaz.css';
import '../../css/v/vayqftzew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vyoff0yaz"/><path class="vayqftzew"/></g>`,
		"fallback": "majesticons:lightbulb-shine",
	});
}

export default Component;
