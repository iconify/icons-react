import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/not9azb9h.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="not9azb9h"/>`,
		"fallback": "thesvg:memcached",
	});
}

export default Component;
