import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubfh4dbuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubfh4dbuz"/>`,
		"fallback": "coolicons:note-edit-fill-round",
	});
}

export default Component;
