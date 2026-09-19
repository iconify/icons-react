import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq8nqq2ik.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq8nqq2ik"/>`,
		"fallback": "bi:shop",
	});
}

export default Component;
