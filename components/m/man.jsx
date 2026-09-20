import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4-atlblr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4-atlblr"/>`,
		"fallback": "uiw:man",
	});
}

export default Component;
