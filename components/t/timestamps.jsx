import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t604nob3q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t604nob3q"/>`,
		"fallback": "gravity-ui:timestamps",
	});
}

export default Component;
