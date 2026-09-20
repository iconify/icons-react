import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzh1yibyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fzh1yibyo"/>`,
		"fallback": "keyline-icons:sticky-note-fill",
	});
}

export default Component;
