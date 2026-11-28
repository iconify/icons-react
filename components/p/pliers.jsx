import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vee8of9rb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vee8of9rb"/>`,
		"fallback": "noviair:pliers",
	});
}

export default Component;
