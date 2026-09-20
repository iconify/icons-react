import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6wah6j7j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6wah6j7j"/>`,
		"fallback": "pinhead:sushi",
	});
}

export default Component;
