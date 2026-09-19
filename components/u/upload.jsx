import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rloht9byo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rloht9byo"/>`,
		"fallback": "heroicons-solid:upload",
	});
}

export default Component;
