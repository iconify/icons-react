import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz7zambhg.css';
import '../../css/y/yt3jrachk.css';
import '../../css/q/qzi560ajg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz7zambhg"/><path class="yt3jrachk"/><path class="qzi560ajg"/>`,
		"fallback": "energy-icons:phone-call-20",
	});
}

export default Component;
