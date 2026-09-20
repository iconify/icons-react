import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha53gdc7q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ha53gdc7q"/>`,
		"fallback": "streamline:shopping-basket-1-remix",
	});
}

export default Component;
