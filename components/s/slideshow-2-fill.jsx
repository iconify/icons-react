import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj5ckp7co.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj5ckp7co"/>`,
		"fallback": "ri:slideshow-2-fill",
	});
}

export default Component;
