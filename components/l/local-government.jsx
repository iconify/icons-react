import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnke7lehf.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnke7lehf"/>`,
		"fallback": "map:local-government",
	});
}

export default Component;
