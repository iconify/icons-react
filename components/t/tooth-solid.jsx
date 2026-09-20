import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5u2-0b5n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t5u2-0b5n"/>`,
		"fallback": "streamline:tooth-solid",
	});
}

export default Component;
