import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd6744_hd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wd6744_hd"/>`,
		"fallback": "mdi-light:note-plus",
	});
}

export default Component;
