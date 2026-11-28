import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejxfu7bbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejxfu7bbp"/>`,
		"fallback": "iconaut:person-running-solid",
	});
}

export default Component;
