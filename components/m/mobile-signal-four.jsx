import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy1-74gpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oy1-74gpw"/>`,
		"fallback": "mynaui:mobile-signal-four",
	});
}

export default Component;
