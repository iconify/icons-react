import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkq-jjbnx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qkq-jjbnx"/>`,
		"fallback": "streamline:leaf-solid",
	});
}

export default Component;
