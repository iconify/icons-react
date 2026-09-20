import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8kwj8n9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j8kwj8n9k"/>`,
		"fallback": "streamline-sharp:shopping-basket-remove-solid",
	});
}

export default Component;
