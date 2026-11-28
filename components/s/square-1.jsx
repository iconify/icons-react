import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6wr2vbib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6wr2vbib"/>`,
		"fallback": "noviair-light:square-1",
	});
}

export default Component;
