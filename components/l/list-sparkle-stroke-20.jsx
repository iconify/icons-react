import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt4h9mb-m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt4h9mb-m"/>`,
		"fallback": "garden:list-sparkle-stroke-20",
	});
}

export default Component;
