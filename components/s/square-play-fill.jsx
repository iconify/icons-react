import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3b-i-0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vm3b-i-0b"/>`,
		"fallback": "keyline-icons:square-play-fill",
	});
}

export default Component;
