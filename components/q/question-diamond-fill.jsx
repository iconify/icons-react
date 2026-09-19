import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2lntcw0a.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2lntcw0a"/>`,
		"fallback": "f7:question-diamond-fill",
	});
}

export default Component;
