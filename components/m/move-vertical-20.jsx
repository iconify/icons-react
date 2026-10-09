import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxvl6gbzy.css';
import '../../css/i/i-5u2oj8j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxvl6gbzy"/><path class="i-5u2oj8j"/>`,
		"fallback": "energy-icons:move-vertical-20",
	});
}

export default Component;
