import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7blo6b6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y7blo6b6g"/>`,
		"fallback": "reicon:restart-circle-filled",
	});
}

export default Component;
