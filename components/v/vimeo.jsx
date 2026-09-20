import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv4v6pbfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv4v6pbfu"/>`,
		"fallback": "thesvg-color:vimeo",
	});
}

export default Component;
