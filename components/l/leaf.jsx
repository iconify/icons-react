import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udufwfb0u.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udufwfb0u"/>`,
		"fallback": "fa-solid:leaf",
	});
}

export default Component;
