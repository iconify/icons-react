import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzuk-mb_m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qzuk-mb_m"/>`,
		"fallback": "streamline:markdown-circle-programming-solid",
	});
}

export default Component;
