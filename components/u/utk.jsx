import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/erjl8ebwk.css';
import '../../css/n/ntpkn0b5z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="erjl8ebwk"/><path class="ntpkn0b5z"/></g>`,
		"fallback": "cryptocurrency-color:utk",
	});
}

export default Component;
