import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht9k5ib0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht9k5ib0i"/>`,
		"fallback": "boxicons:van-filled",
	});
}

export default Component;
