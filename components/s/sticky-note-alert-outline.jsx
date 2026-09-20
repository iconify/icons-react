import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/did9inf2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="did9inf2j"/>`,
		"fallback": "mdi:sticky-note-alert-outline",
	});
}

export default Component;
