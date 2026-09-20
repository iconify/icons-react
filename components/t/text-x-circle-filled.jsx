import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4xqd7m7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b4xqd7m7c"/>`,
		"fallback": "reicon:text-x-circle-filled",
	});
}

export default Component;
