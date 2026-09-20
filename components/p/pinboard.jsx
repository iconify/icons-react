import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmg5pabex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmg5pabex"/>`,
		"fallback": "simple-icons:pinboard",
	});
}

export default Component;
