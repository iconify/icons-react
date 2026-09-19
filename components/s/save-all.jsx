import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1uuo7fka.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j1uuo7fka"/>`,
		"fallback": "codicon:save-all",
	});
}

export default Component;
