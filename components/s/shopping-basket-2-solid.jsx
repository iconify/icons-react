import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9as19z5x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v9as19z5x"/>`,
		"fallback": "streamline-flex:shopping-basket-2-solid",
	});
}

export default Component;
