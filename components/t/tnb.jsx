import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vf09d-bwu.css';
import '../../css/x/x2ss838gt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="vf09d-bwu"/><path class="x2ss838gt"/></g>`,
		"fallback": "cryptocurrency-color:tnb",
	});
}

export default Component;
