import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay_6d-p7x.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay_6d-p7x"/>`,
		"fallback": "garden:video-off-fill-12",
	});
}

export default Component;
