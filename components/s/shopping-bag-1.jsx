import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2wo1bdya.css';

const viewBox = {"width":23,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2wo1bdya"/>`,
		"fallback": "fontisto:shopping-bag-1",
	});
}

export default Component;
