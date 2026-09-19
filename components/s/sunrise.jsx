import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeqprcb2s.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zeqprcb2s"/>`,
		"fallback": "f7:sunrise",
	});
}

export default Component;
