import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z59q2ohzx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z59q2ohzx"/>`,
		"fallback": "streamline:shopping-basket-1-solid",
	});
}

export default Component;
