import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzmae1v_r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzmae1v_r"/>`,
		"fallback": "icomoon-free:subscript2",
	});
}

export default Component;
