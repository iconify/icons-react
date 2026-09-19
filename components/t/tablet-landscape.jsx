import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd48b3bgo.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd48b3bgo"/>`,
		"fallback": "foundation:tablet-landscape",
	});
}

export default Component;
