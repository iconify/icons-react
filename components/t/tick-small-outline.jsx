import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dls6cz9sj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dls6cz9sj"/>`,
		"fallback": "teenyicons:tick-small-outline",
	});
}

export default Component;
