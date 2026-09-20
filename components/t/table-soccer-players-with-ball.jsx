import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd9p4freu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd9p4freu"/>`,
		"fallback": "pinhead:table-soccer-players-with-ball",
	});
}

export default Component;
