import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glkde0b7d.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glkde0b7d"/>`,
		"fallback": "lineicons:signs-post-2",
	});
}

export default Component;
