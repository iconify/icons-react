import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imw6l2u6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imw6l2u6p"/>`,
		"fallback": "griddy-icons:settings-alt-filled",
	});
}

export default Component;
