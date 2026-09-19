import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gifnzwbsx.css';
import '../../css/h/hqd5qzb7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gifnzwbsx"/><path class="hqd5qzb7s"/></g>`,
		"fallback": "iconoir:user-star",
	});
}

export default Component;
