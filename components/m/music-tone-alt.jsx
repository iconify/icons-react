import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxfgd9bgs.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxfgd9bgs"/>`,
		"fallback": "simple-line-icons:music-tone-alt",
	});
}

export default Component;
