import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge-k3mw8x.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge-k3mw8x"/>`,
		"fallback": "maki:monument-11",
	});
}

export default Component;
