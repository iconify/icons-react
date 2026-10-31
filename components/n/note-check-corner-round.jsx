import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-gdrnhrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-gdrnhrh"/>`,
		"fallback": "coolicons:note-check-corner-round",
	});
}

export default Component;
