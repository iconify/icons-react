import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xonr3kbym.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xonr3kbym"/>`,
		"fallback": "streamline:missed-call-solid",
	});
}

export default Component;
