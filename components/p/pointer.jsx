import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h40qtf6_n.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h40qtf6_n"/>`,
		"fallback": "lineicons:pointer",
	});
}

export default Component;
