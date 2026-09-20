import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm9szy78b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vm9szy78b"/>`,
		"fallback": "keyline-icons:shield-x-fill",
	});
}

export default Component;
