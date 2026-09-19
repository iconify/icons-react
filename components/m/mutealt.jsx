import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkxh3nbjo.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkxh3nbjo"/>`,
		"fallback": "whh:mutealt",
	});
}

export default Component;
