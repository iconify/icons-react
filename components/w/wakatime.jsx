import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfr8q1bcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfr8q1bcc"/>`,
		"fallback": "simple-icons:wakatime",
	});
}

export default Component;
