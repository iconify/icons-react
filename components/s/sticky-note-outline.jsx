import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkb5c9wkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkb5c9wkg"/>`,
		"fallback": "mdi:sticky-note-outline",
	});
}

export default Component;
