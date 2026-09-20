import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/areyw3b_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="areyw3b_r"/>`,
		"fallback": "mdi:vanish-quarter",
	});
}

export default Component;
