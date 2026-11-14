import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbbp588xj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbbp588xj"/>`,
		"fallback": "hugeicons:money-bag-01",
	});
}

export default Component;
