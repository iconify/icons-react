import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p88ps52_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p88ps52_s"/>`,
		"fallback": "mdi:subdirectory-arrow-right",
	});
}

export default Component;
