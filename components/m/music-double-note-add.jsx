import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usc5tqbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usc5tqbdk"/>`,
		"fallback": "iconoir:music-double-note-add",
	});
}

export default Component;
