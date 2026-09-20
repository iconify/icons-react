import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv3nwjbqk.css';
import '../../css/d/da5fxxb_r.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv3nwjbqk"/><path class="da5fxxb_r"/>`,
		"fallback": "lineicons:shopping-basket",
	});
}

export default Component;
