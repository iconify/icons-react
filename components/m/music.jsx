import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1pdyie5x.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1pdyie5x"/>`,
		"fallback": "foundation:music",
	});
}

export default Component;
