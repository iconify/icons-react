import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtpcm5jix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtpcm5jix"/>`,
		"fallback": "keyline-icons:user-minus",
	});
}

export default Component;
