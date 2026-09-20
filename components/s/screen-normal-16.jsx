import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdi992bfk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdi992bfk"/>`,
		"fallback": "octicon:screen-normal-16",
	});
}

export default Component;
