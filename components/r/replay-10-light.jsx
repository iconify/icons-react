import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cee5okbvx.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cee5okbvx"/>`,
		"fallback": "pullo:replay-10-light",
	});
}

export default Component;
