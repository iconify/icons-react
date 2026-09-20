import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tovlsf9tm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tovlsf9tm"/>`,
		"fallback": "la:unlink",
	});
}

export default Component;
