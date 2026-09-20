import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw5f2fnxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw5f2fnxy"/>`,
		"fallback": "stash:new-window-page-light",
	});
}

export default Component;
