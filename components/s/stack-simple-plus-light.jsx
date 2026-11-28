import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5-m-cc0j.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5-m-cc0j"/>`,
		"fallback": "pullo:stack-simple-plus-light",
	});
}

export default Component;
