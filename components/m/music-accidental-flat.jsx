import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tszbxym_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tszbxym_o"/>`,
		"fallback": "mdi:music-accidental-flat",
	});
}

export default Component;
