import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjuup0b1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjuup0b1b"/>`,
		"fallback": "lets-icons:transfer-left-light",
	});
}

export default Component;
