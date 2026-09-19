import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jewwt-x9z.css';
import '../../css/j/j02m59mzy.css';
import '../../css/c/cy0djhbhr.css';
import '../../css/h/htogyc_on.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jewwt-x9z"/><path class="j02m59mzy"/><path class="cy0djhbhr"/><path class="htogyc_on"/>`,
		"fallback": "flat-color-icons:rotate-to-landscape",
	});
}

export default Component;
