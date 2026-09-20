import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0kn04bbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0kn04bbi"/>`,
		"fallback": "mdi:tag-minus",
	});
}

export default Component;
