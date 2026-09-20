import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2j2plflq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2j2plflq"/>`,
		"fallback": "teenyicons:screen-alt-2-outline",
	});
}

export default Component;
