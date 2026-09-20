import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szo7gubys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szo7gubys"/>`,
		"fallback": "lets-icons:moon-alt-fill",
	});
}

export default Component;
