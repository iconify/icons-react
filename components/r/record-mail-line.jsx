import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g60q9ts9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g60q9ts9m"/>`,
		"fallback": "ri:record-mail-line",
	});
}

export default Component;
