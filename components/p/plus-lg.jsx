import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0j119nmd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0j119nmd"/>`,
		"fallback": "bi:plus-lg",
	});
}

export default Component;
