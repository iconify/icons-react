import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i33_62bsb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i33_62bsb"/>`,
		"fallback": "teenyicons:message-text-solid",
	});
}

export default Component;
