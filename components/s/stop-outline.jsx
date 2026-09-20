import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o07e7hgim.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o07e7hgim"/>`,
		"fallback": "teenyicons:stop-outline",
	});
}

export default Component;
