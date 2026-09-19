import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5f5ksbis.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5f5ksbis"/>`,
		"fallback": "whh:pixelwand",
	});
}

export default Component;
