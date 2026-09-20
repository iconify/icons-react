import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkese0awh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkese0awh"/>`,
		"fallback": "pinhead:pixel-canoe",
	});
}

export default Component;
