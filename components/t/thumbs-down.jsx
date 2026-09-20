import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxs5r9b4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jxs5r9b4c"/>`,
		"fallback": "reicon:thumbs-down",
	});
}

export default Component;
