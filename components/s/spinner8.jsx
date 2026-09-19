import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmhvkccmr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmhvkccmr"/>`,
		"fallback": "icomoon-free:spinner8",
	});
}

export default Component;
