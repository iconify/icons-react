import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0o_mpb7t.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0o_mpb7t"/>`,
		"fallback": "whh:squarelike",
	});
}

export default Component;
