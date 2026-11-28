import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcik8bwgv.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcik8bwgv"/>`,
		"fallback": "pullo:olive-light",
	});
}

export default Component;
