import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emi064kuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emi064kuy"/>`,
		"fallback": "bitcoin-icons:receive-outline",
	});
}

export default Component;
