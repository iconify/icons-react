import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krz_n7ouz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krz_n7ouz"/>`,
		"fallback": "ci:phone-outline",
	});
}

export default Component;
