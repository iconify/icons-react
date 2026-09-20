import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmbsf60om.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmbsf60om"/>`,
		"fallback": "la:swimming-pool",
	});
}

export default Component;
