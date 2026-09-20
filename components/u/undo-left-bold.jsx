import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqdxw7bid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tqdxw7bid"/>`,
		"fallback": "solar:undo-left-bold",
	});
}

export default Component;
