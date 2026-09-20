import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo1g7xbzh.css';
import '../../css/y/yvaz16bmf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo1g7xbzh"/><path class="yvaz16bmf"/>`,
		"fallback": "openmoji:red-triangle-pointed-up",
	});
}

export default Component;
