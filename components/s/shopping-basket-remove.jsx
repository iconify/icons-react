import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg1z4-d7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg1z4-d7g"/>`,
		"fallback": "streamline-sharp:shopping-basket-remove",
	});
}

export default Component;
