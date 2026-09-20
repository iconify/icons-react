import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd2e8acga.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd2e8acga"/>`,
		"fallback": "la:map-marked-solid",
	});
}

export default Component;
