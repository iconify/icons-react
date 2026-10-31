import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgbxatb4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgbxatb4v"/>`,
		"fallback": "coolicons:note-edit-corner-round",
	});
}

export default Component;
