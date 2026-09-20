import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvku5ny2z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvku5ny2z"/>`,
		"fallback": "teenyicons:ngc-outline",
	});
}

export default Component;
