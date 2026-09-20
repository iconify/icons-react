import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv6r48b_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sv6r48b_v"/>`,
		"fallback": "simple-icons:spinrilla",
	});
}

export default Component;
