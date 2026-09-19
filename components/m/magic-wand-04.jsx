import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv_ezp8gy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jv_ezp8gy"/>`,
		"fallback": "hugeicons:magic-wand-04",
	});
}

export default Component;
