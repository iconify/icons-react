import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u95q25xah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u95q25xah"/>`,
		"fallback": "nrk:note-1-off",
	});
}

export default Component;
