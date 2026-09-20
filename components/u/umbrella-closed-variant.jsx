import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skjyq2bzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skjyq2bzz"/>`,
		"fallback": "mdi:umbrella-closed-variant",
	});
}

export default Component;
