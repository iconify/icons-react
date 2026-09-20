import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmi6sy-ao.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmi6sy-ao"/>`,
		"fallback": "teenyicons:python-outline",
	});
}

export default Component;
