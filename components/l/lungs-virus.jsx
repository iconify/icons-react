import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoervgk8e.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoervgk8e"/>`,
		"fallback": "fa6-solid:lungs-virus",
	});
}

export default Component;
