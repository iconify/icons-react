import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8ss29b8v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8ss29b8v"/>`,
		"fallback": "thesvg-color:sketch-light",
	});
}

export default Component;
