import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdkevccnx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pdkevccnx"/>`,
		"fallback": "streamline:underline-text-1-solid",
	});
}

export default Component;
