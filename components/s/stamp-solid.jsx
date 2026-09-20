import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp1oz3_3i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp1oz3_3i"/>`,
		"fallback": "teenyicons:stamp-solid",
	});
}

export default Component;
