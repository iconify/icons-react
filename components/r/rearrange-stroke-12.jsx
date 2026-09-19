import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpznde9ff.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpznde9ff"/>`,
		"fallback": "garden:rearrange-stroke-12",
	});
}

export default Component;
