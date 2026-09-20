import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcysddb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcysddb3l"/>`,
		"fallback": "keyline-icons:sticky-note-plus",
	});
}

export default Component;
