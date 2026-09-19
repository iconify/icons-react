import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st0_9e3qq.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st0_9e3qq"/>`,
		"fallback": "f7:square-split-1x2",
	});
}

export default Component;
