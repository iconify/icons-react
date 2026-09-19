import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-5qcnbqh.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-5qcnbqh"/>`,
		"fallback": "fad:mute",
	});
}

export default Component;
