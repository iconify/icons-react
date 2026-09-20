import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6nnf9-3q.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a6nnf9-3q"/>`,
		"fallback": "pajamas:status-paused",
	});
}

export default Component;
