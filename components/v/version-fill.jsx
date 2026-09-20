import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6q-x2b_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6q-x2b_t"/>`,
		"fallback": "mingcute:version-fill",
	});
}

export default Component;
