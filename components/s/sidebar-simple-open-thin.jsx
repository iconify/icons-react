import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6ibwr82f.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6ibwr82f"/>`,
		"fallback": "pullo:sidebar-simple-open-thin",
	});
}

export default Component;
