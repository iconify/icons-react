import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hst90xz2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hst90xz2u"/>`,
		"fallback": "boxicons:repeat-alt-filled",
	});
}

export default Component;
