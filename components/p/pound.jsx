import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol4ycu_lz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol4ycu_lz"/>`,
		"fallback": "hugeicons:pound",
	});
}

export default Component;
