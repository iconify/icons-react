import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijg_ljbou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijg_ljbou"/>`,
		"fallback": "prime:star-half-fill",
	});
}

export default Component;
