import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak0ww7bmz.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak0ww7bmz"/>`,
		"fallback": "pullo:sidebar-simple-close-light",
	});
}

export default Component;
