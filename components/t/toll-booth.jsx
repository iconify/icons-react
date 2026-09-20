import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j70-_o67p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j70-_o67p"/>`,
		"fallback": "maki:toll-booth",
	});
}

export default Component;
