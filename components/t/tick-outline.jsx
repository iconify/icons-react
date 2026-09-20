import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scypenb4f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scypenb4f"/>`,
		"fallback": "teenyicons:tick-outline",
	});
}

export default Component;
