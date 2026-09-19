import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs6sgts4h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xs6sgts4h"/>`,
		"fallback": "heroicons-solid:support",
	});
}

export default Component;
