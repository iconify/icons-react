import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e71rtzb4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e71rtzb4b"/>`,
		"fallback": "token:tkx",
	});
}

export default Component;
