import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/paghlm9jp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="paghlm9jp"/>`,
		"fallback": "teenyicons:unlock-circle-outline",
	});
}

export default Component;
