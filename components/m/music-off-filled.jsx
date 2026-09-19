import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii7we8yak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ii7we8yak"/>`,
		"fallback": "griddy-icons:music-off-filled",
	});
}

export default Component;
