import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zaqsa0buo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zaqsa0buo"/>`,
		"fallback": "mingcute:rada-line",
	});
}

export default Component;
