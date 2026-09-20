import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un5t715gt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un5t715gt"/>`,
		"fallback": "pinhead:square-with-square-dot",
	});
}

export default Component;
