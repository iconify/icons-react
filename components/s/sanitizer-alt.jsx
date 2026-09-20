import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez11qmbkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez11qmbkh"/>`,
		"fallback": "uit:sanitizer-alt",
	});
}

export default Component;
