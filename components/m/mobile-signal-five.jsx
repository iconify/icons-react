import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojt5pibuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojt5pibuu"/>`,
		"fallback": "mynaui:mobile-signal-five",
	});
}

export default Component;
