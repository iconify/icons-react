import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-szifb4q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-szifb4q"/>`,
		"fallback": "maki:snowmobile-15",
	});
}

export default Component;
