import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-1nsqbrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-1nsqbrh"/>`,
		"fallback": "si:star-fill",
	});
}

export default Component;
