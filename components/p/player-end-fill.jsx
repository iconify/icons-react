import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me8lomb-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="me8lomb-n"/>`,
		"fallback": "iconamoon:player-end-fill",
	});
}

export default Component;
