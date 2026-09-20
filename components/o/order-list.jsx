import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msydp5vzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msydp5vzu"/>`,
		"fallback": "tdesign:order-list",
	});
}

export default Component;
