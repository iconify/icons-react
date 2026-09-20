import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd25emlxv.css';
import '../../css/z/zesgwkbls.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd25emlxv"/><path class="zesgwkbls"/>`,
		"fallback": "openmoji:kotlin",
	});
}

export default Component;
