import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8mbo0bbb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d8mbo0bbb"/>`,
		"fallback": "streamline-flex:timer-zero-solid",
	});
}

export default Component;
