import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk136onmn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk136onmn"/>`,
		"fallback": "pinhead:question-mark",
	});
}

export default Component;
