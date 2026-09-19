import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zfbce62pl.css';
import '../../css/j/j582t1bwn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="zfbce62pl"/><path class="j582t1bwn"/></g>`,
		"fallback": "cryptocurrency-color:qrl",
	});
}

export default Component;
