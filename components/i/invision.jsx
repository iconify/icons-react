import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9vl9objf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9vl9objf"/>`,
		"fallback": "la:invision",
	});
}

export default Component;
