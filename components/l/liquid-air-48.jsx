import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt1dg5b4b.css';
import '../../css/q/qeyspdugl.css';
import '../../css/a/a47wfebfy.css';
import '../../css/v/v8xteh5vu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt1dg5b4b"/><path class="qeyspdugl"/><path class="a47wfebfy"/><path class="v8xteh5vu"/>`,
		"fallback": "energy-icons:liquid-air-48",
	});
}

export default Component;
