import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9s0-bc8y.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9s0-bc8y"/>`,
		"fallback": "pullo:smiley-plus-light",
	});
}

export default Component;
