import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjz9jgbbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjz9jgbbd"/>`,
		"fallback": "uit:wallet",
	});
}

export default Component;
