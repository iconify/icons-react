import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-3vf829q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h-3vf829q"/>`,
		"fallback": "streamline-flex:lock-rotation-solid",
	});
}

export default Component;
