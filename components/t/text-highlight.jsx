import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-jxcu6vs.css';
import '../../css/x/xq-7sgbpo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-jxcu6vs"/><path class="xq-7sgbpo"/>`,
		"fallback": "carbon:text-highlight",
	});
}

export default Component;
