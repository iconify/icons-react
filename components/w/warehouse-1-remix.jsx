import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5r94jbqo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r5r94jbqo"/>`,
		"fallback": "streamline:warehouse-1-remix",
	});
}

export default Component;
