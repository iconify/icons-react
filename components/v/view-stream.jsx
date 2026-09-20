import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pehdgxa9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pehdgxa9j"/>`,
		"fallback": "mdi:view-stream",
	});
}

export default Component;
