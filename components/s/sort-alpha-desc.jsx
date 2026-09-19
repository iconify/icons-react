import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn48d1adx.css';

const viewBox = {"width":1632,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn48d1adx"/>`,
		"fallback": "fa:sort-alpha-desc",
	});
}

export default Component;
