import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo0zz1btx.css';
import '../../css/o/o7lpvfbsc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo0zz1btx"/><path class="o7lpvfbsc"/>`,
		"fallback": "openmoji:latin-cross",
	});
}

export default Component;
