import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7y4no38y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h7y4no38y"/>`,
		"fallback": "streamline-flex-color:timer-zero-flat",
	});
}

export default Component;
