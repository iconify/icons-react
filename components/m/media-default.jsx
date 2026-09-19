import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjunlk9ht.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjunlk9ht"/>`,
		"fallback": "dashicons:media-default",
	});
}

export default Component;
