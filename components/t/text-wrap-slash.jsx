import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9qxjwb6f.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9qxjwb6f"/>`,
		"fallback": "pullo:text-wrap-slash",
	});
}

export default Component;
