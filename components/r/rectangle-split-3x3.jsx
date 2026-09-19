import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d73of2b9u.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d73of2b9u"/>`,
		"fallback": "f7:rectangle-split-3x3",
	});
}

export default Component;
