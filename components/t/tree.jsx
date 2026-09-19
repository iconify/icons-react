import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxmoz7bla.css';
import '../../css/y/y4npxtoda.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxmoz7bla"/><path class="y4npxtoda"/>`,
		"fallback": "carbon:tree",
	});
}

export default Component;
