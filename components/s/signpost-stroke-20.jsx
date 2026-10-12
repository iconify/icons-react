import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt-d5tt_t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt-d5tt_t"/>`,
		"fallback": "garden:signpost-stroke-20",
	});
}

export default Component;
