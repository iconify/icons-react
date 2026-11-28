import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phngu9b5b.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phngu9b5b"/>`,
		"fallback": "pullo:turtle",
	});
}

export default Component;
