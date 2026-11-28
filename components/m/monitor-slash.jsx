import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t44j-ubxn.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t44j-ubxn"/>`,
		"fallback": "pullo:monitor-slash",
	});
}

export default Component;
