import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3-m1jbcu.css';
import '../../css/q/q45ggwbcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3-m1jbcu"/><path class="q45ggwbcb"/>`,
		"fallback": "bxs:shopping-bags",
	});
}

export default Component;
