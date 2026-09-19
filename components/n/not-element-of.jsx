import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykos20fnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykos20fnv"/>`,
		"fallback": "boxicons:not-element-of",
	});
}

export default Component;
