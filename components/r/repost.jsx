import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gz5hn93bt.css';
import '../../css/v/v8t38ubkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gz5hn93bt"/><path class="v8t38ubkk"/></g>`,
		"fallback": "hugeicons:repost",
	});
}

export default Component;
