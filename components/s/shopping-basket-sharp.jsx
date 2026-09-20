import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckex8b9yy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckex8b9yy"/>`,
		"fallback": "keyline-icons:shopping-basket-sharp",
	});
}

export default Component;
