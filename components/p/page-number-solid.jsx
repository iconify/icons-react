import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2b3d_yuw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l2b3d_yuw"/>`,
		"fallback": "teenyicons:page-number-solid",
	});
}

export default Component;
