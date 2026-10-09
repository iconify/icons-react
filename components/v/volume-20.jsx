import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcyh21bht.css';
import '../../css/i/iuy7adb4k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcyh21bht"/><path class="iuy7adb4k"/>`,
		"fallback": "energy-icons:volume-20",
	});
}

export default Component;
