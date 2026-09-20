import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktjsz9b2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktjsz9b2h"/>`,
		"fallback": "uil:user-hard-hat",
	});
}

export default Component;
