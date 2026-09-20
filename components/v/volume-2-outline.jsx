import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7b-_ybbn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7b-_ybbn"/>`,
		"fallback": "teenyicons:volume-2-outline",
	});
}

export default Component;
