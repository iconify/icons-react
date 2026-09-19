import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yeb0kmifh.css';

const viewBox = {"width":717,"height":666};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yeb0kmifh"/>`,
		"fallback": "ls:upload",
	});
}

export default Component;
