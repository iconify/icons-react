import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2x79rb9n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2x79rb9n"/>`,
		"fallback": "teenyicons:table-solid",
	});
}

export default Component;
