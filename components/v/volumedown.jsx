import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqtm87wnl.css';

const viewBox = {"width":464,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqtm87wnl"/>`,
		"fallback": "ls:volumedown",
	});
}

export default Component;
