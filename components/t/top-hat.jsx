import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbkalab5n.css';
import '../../css/j/jut-sxzup.css';
import '../../css/y/yf6vu0_hw.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbkalab5n"/><path class="jut-sxzup"/><path class="yf6vu0_hw"/>`,
		"fallback": "openmoji:top-hat",
	});
}

export default Component;
