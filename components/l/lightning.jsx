import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1kwab81w.css';

const viewBox = {"width":352,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1kwab81w"/>`,
		"fallback": "ps:lightning",
	});
}

export default Component;
