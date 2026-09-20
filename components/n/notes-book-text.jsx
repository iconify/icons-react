import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4fa5bbhy.css';
import '../../css/t/t-sx6n-7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k4fa5bbhy"/><path class="t-sx6n-7a"/></g>`,
		"fallback": "streamline-ultimate-color:notes-book-text",
	});
}

export default Component;
