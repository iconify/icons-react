import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmaxs5b3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmaxs5b3j"/>`,
		"fallback": "mdi:sticky-note-text-outline",
	});
}

export default Component;
