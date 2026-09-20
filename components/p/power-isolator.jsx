import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm23xgb9z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm23xgb9z"/>`,
		"fallback": "temaki:power-isolator",
	});
}

export default Component;
