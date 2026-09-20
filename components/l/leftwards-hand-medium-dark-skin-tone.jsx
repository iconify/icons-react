import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye_28eu0i.css';
import '../../css/j/jzkzakb6k.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye_28eu0i"/><path class="jzkzakb6k"/>`,
		"fallback": "openmoji:leftwards-hand-medium-dark-skin-tone",
	});
}

export default Component;
