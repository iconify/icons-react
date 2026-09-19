import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9vnzn5cn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9vnzn5cn"/>`,
		"fallback": "ion:ios-clock",
	});
}

export default Component;
