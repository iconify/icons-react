import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev4xohbfv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ev4xohbfv"/>`,
		"fallback": "streamline:toilet-man-remix",
	});
}

export default Component;
