import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a86q1tbwo.css';
import '../../css/j/jzkzakb6k.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a86q1tbwo"/><path class="jzkzakb6k"/>`,
		"fallback": "openmoji:leftwards-hand-dark-skin-tone",
	});
}

export default Component;
