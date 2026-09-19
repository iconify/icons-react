import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3q2zxbwp.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u3q2zxbwp"/>`,
		"fallback": "codicon:search-compact",
	});
}

export default Component;
