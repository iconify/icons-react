import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1c00mb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1c00mb_t"/>`,
		"fallback": "mdi:monitor-clean",
	});
}

export default Component;
