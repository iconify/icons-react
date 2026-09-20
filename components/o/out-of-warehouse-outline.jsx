import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mee7l434j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mee7l434j"/>`,
		"fallback": "lsicon:out-of-warehouse-outline",
	});
}

export default Component;
