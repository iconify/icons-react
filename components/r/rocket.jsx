import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4n9gkkjc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4n9gkkjc"/>`,
		"fallback": "fa-solid:rocket",
	});
}

export default Component;
