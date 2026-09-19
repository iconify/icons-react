import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfy3q2bsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfy3q2bsr"/>`,
		"fallback": "hugeicons:mouse-pointer-ban",
	});
}

export default Component;
