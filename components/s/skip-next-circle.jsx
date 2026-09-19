import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u841l1bji.css';
import '../../css/b/bwibdw4bb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u841l1bji"/><path class="bwibdw4bb"/>`,
		"fallback": "boxicons:skip-next-circle",
	});
}

export default Component;
