import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wljus_b4l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wljus_b4l"/>`,
		"fallback": "game-icons:sleepy",
	});
}

export default Component;
