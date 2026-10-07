import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9bgmi4jn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9bgmi4jn"/>`,
		"fallback": "tabler:square-dashed-x",
	});
}

export default Component;
