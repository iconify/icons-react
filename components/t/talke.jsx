import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo5f_u6rc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo5f_u6rc"/>`,
		"fallback": "raphael:talke",
	});
}

export default Component;
