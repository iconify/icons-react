import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gettf3w-b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gettf3w-b"/>`,
		"fallback": "pinhead:pick-hammer-with-rocks",
	});
}

export default Component;
