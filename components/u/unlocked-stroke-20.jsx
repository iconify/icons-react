import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fel8-rbzx.css';
import '../../css/q/qtj15rupr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fel8-rbzx"/><path class="qtj15rupr"/>`,
		"fallback": "garden:unlocked-stroke-20",
	});
}

export default Component;
