import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdcqx14cv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdcqx14cv"/>`,
		"fallback": "hugeicons:loading-03",
	});
}

export default Component;
