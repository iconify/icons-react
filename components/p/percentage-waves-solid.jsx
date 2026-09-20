import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dir0ivzqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dir0ivzqt"/>`,
		"fallback": "mynaui:percentage-waves-solid",
	});
}

export default Component;
