import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqlr9bbbp.css';
import '../../css/z/zln5icnwf.css';
import '../../css/m/mfvow-bah.css';
import '../../css/i/iwjrb3bnb.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqlr9bbbp"/><path class="zln5icnwf"/><path class="mfvow-bah"/><path class="iwjrb3bnb"/>`,
		"fallback": "openmoji:sparkle",
	});
}

export default Component;
