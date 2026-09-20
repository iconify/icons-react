import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl9nb_96w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sl9nb_96w"/>`,
		"fallback": "teenyicons:ms-excel-outline",
	});
}

export default Component;
