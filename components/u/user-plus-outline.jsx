import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy_oq0bri.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy_oq0bri"/>`,
		"fallback": "teenyicons:user-plus-outline",
	});
}

export default Component;
