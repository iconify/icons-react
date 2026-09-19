import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an3z_3bir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an3z_3bir"/>`,
		"fallback": "griddy-icons:vault-filled",
	});
}

export default Component;
