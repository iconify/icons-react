import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9ejojb1f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9ejojb1f"/>`,
		"fallback": "pinhead:nine-point-star-outline",
	});
}

export default Component;
