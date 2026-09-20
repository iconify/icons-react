import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro7fx3b7c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro7fx3b7c"/>`,
		"fallback": "teenyicons:pen-solid",
	});
}

export default Component;
