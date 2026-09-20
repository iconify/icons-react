import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9pcknmql.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9pcknmql"/>`,
		"fallback": "pinhead:table-tennis-paddle-and-ball",
	});
}

export default Component;
