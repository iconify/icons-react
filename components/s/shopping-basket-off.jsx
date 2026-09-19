import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmh37sbrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tmh37sbrw"/>`,
		"fallback": "griddy-icons:shopping-basket-off",
	});
}

export default Component;
