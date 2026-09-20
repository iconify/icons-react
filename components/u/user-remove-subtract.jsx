import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjd6bdbnn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjd6bdbnn"/>`,
		"fallback": "streamline:user-remove-subtract",
	});
}

export default Component;
