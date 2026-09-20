import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0v7beb1j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0v7beb1j"/>`,
		"fallback": "pinhead:pawprints-and-heart",
	});
}

export default Component;
