import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlxe_2blb.css';
import '../../css/t/tum5xlert.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlxe_2blb"/><path class="tum5xlert"/>`,
		"fallback": "boxicons:print-dollar",
	});
}

export default Component;
