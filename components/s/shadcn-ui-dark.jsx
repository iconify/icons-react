import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1us_l5nc.css';
import '../../css/f/fd1zf2m-n.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1us_l5nc"/><path class="fd1zf2m-n"/>`,
		"fallback": "thesvg-color:shadcn-ui-dark",
	});
}

export default Component;
