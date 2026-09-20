import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0x-y3z1q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q0x-y3z1q"/>`,
		"fallback": "streamline-flex:landscape-2-solid",
	});
}

export default Component;
