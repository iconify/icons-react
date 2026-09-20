import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjxvsbq_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjxvsbq_f"/>`,
		"fallback": "ri:sun-foggy-line",
	});
}

export default Component;
