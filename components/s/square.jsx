import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9wk39tul.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9wk39tul"/>`,
		"fallback": "fa7-regular:square",
	});
}

export default Component;
