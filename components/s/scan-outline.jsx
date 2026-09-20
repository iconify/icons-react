import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqfr1-b0q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqfr1-b0q"/>`,
		"fallback": "teenyicons:scan-outline",
	});
}

export default Component;
