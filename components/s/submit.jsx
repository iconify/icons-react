import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u31l4ebpx.css';

const viewBox = {"width":15,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u31l4ebpx"/>`,
		"fallback": "formkit:submit",
	});
}

export default Component;
