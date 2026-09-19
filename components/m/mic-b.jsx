import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6-4xurgn.css';
import '../../css/a/am0up7b7a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6-4xurgn"/><path class="am0up7b7a"/>`,
		"fallback": "ion:mic-b",
	});
}

export default Component;
