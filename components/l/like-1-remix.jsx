import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah4pulxlj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ah4pulxlj"/>`,
		"fallback": "streamline:like-1-remix",
	});
}

export default Component;
