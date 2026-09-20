import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1_3gx95k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n1_3gx95k"/>`,
		"fallback": "streamline:line-arrow-move-down-1-remix",
	});
}

export default Component;
