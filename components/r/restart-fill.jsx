import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl26lxpjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hl26lxpjm"/>`,
		"fallback": "iconamoon:restart-fill",
	});
}

export default Component;
