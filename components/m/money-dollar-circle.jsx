import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1_to411n.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1_to411n"/>`,
		"fallback": "f7:money-dollar-circle",
	});
}

export default Component;
