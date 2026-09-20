import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8d7i3boe.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l8d7i3boe"/>`,
		"fallback": "teenyicons:strikethrough-solid",
	});
}

export default Component;
