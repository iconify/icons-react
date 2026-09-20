import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft8ybjbwf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft8ybjbwf"/>`,
		"fallback": "teenyicons:view-column-outline",
	});
}

export default Component;
