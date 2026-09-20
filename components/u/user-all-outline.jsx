import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr97u2_pp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr97u2_pp"/>`,
		"fallback": "lsicon:user-all-outline",
	});
}

export default Component;
