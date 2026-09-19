import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2rg-_a4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2rg-_a4v"/>`,
		"fallback": "boxicons:subset-filled",
	});
}

export default Component;
