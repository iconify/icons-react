import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n9pjfq-yt.css';
import '../../css/t/ti5n43m2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="n9pjfq-yt"/><path class="ti5n43m2i"/></g>`,
		"fallback": "hugeicons:play-list-remove",
	});
}

export default Component;
