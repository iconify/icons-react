import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n9pjfq-yt.css';
import '../../css/f/f9a_3nbxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="n9pjfq-yt"/><path class="f9a_3nbxy"/></g>`,
		"fallback": "hugeicons:play-list-add",
	});
}

export default Component;
