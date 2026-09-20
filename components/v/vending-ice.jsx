import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_3ltgb8o.css';
import '../../css/o/ojl0pt7uj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_3ltgb8o"/><path class="ojl0pt7uj"/>`,
		"fallback": "temaki:vending-ice",
	});
}

export default Component;
