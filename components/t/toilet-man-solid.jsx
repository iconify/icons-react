import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eakgc7bcp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eakgc7bcp"/>`,
		"fallback": "streamline-flex:toilet-man-solid",
	});
}

export default Component;
