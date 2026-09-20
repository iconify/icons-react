import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jm9annv6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jm9annv6x"/>`,
		"fallback": "keyline-icons:sticky-note-x-sharp",
	});
}

export default Component;
