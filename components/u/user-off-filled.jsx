import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lii6gfblo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lii6gfblo"/>`,
		"fallback": "griddy-icons:user-off-filled",
	});
}

export default Component;
