import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af457gbun.css';
import '../../css/n/ndvwudbno.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="af457gbun"/><path class="ndvwudbno"/>`,
		"fallback": "streamline-plump:shopping-cart-add-solid",
	});
}

export default Component;
