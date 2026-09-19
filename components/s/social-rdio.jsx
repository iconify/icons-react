import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oymborbwe.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oymborbwe"/>`,
		"fallback": "foundation:social-rdio",
	});
}

export default Component;
