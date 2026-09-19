import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcfak91qi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcfak91qi"/>`,
		"fallback": "hugeicons:thumbs-down",
	});
}

export default Component;
