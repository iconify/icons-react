import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0z9-6mmj.css';
import '../../css/d/djhg-vbxr.css';
import '../../css/j/j0k4v8zak.css';
import '../../css/c/c4voa1b3t.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0z9-6mmj"/><path class="djhg-vbxr"/><path class="j0k4v8zak"/><path class="c4voa1b3t"/>`,
		"fallback": "devicon:phpmyadmin",
	});
}

export default Component;
