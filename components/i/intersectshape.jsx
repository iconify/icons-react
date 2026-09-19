import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd_x95izh.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd_x95izh"/>`,
		"fallback": "whh:intersectshape",
	});
}

export default Component;
