import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpvth5b1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpvth5b1r"/>`,
		"fallback": "mingcute:paw-line",
	});
}

export default Component;
