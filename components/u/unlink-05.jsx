import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e326mpbqv.css';
import '../../css/s/sz2gzuhvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e326mpbqv"/><path class="sz2gzuhvm"/></g>`,
		"fallback": "hugeicons:unlink-05",
	});
}

export default Component;
