import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zodqo1c7p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zodqo1c7p"/>`,
		"fallback": "formkit:reddit",
	});
}

export default Component;
