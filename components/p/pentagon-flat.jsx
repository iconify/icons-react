import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy2m-lblv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qy2m-lblv"/>`,
		"fallback": "streamline-color:pentagon-flat",
	});
}

export default Component;
