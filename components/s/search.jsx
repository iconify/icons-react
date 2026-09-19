import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl7z8j7sc.css';
import '../../css/f/fg6p2fbtz.css';

const viewBox = {"width":15,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zl7z8j7sc"/><path class="fg6p2fbtz"/>`,
		"fallback": "formkit:search",
	});
}

export default Component;
