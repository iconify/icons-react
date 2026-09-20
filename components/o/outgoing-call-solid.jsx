import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lncb9db9u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lncb9db9u"/>`,
		"fallback": "streamline:outgoing-call-solid",
	});
}

export default Component;
