import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_3hzubum.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_3hzubum"/>`,
		"fallback": "bi:lock-fill",
	});
}

export default Component;
