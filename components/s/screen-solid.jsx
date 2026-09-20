import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kova1rb8c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kova1rb8c"/>`,
		"fallback": "teenyicons:screen-solid",
	});
}

export default Component;
