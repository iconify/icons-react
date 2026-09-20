import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-w2wcd_t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-w2wcd_t"/>`,
		"fallback": "pinhead:people-sitting-in-theater",
	});
}

export default Component;
