import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd_60tzip.css';
import '../../css/w/wyf5cbt8m.css';
import '../../css/y/yyz6j7bdx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd_60tzip"/><path class="wyf5cbt8m"/><path class="yyz6j7bdx"/>`,
		"fallback": "streamline-pixel:interface-essential-shrink-1",
	});
}

export default Component;
