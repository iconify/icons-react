import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsds9abwl.css';
import '../../css/i/ixvh0acwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tsds9abwl"/><path clip-rule="evenodd" class="ixvh0acwz"/>`,
		"fallback": "cuida:volume-2-outline",
	});
}

export default Component;
