import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlr_hjb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlr_hjb5k"/>`,
		"fallback": "ri:presentation-fill",
	});
}

export default Component;
