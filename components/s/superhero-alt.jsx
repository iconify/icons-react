import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt8u4qbwd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt8u4qbwd"/>`,
		"fallback": "dashicons:superhero-alt",
	});
}

export default Component;
