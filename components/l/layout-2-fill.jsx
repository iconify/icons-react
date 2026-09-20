import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8bdndb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8bdndb2t"/>`,
		"fallback": "mingcute:layout-2-fill",
	});
}

export default Component;
