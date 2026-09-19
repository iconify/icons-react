import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm0lb9bgj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm0lb9bgj"/>`,
		"fallback": "entypo:new-message",
	});
}

export default Component;
