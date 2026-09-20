import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7rlznb_n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7rlznb_n"/>`,
		"fallback": "qlementine-icons:wave-sine-16",
	});
}

export default Component;
