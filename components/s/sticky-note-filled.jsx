import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm82tsche.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vm82tsche"/>`,
		"fallback": "tdesign:sticky-note-filled",
	});
}

export default Component;
