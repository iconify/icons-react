import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntp499brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntp499brf"/>`,
		"fallback": "tabler:keyboard-off",
	});
}

export default Component;
