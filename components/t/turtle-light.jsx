import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhp7iwb2u.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhp7iwb2u"/>`,
		"fallback": "pullo:turtle-light",
	});
}

export default Component;
