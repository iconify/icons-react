import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlmv-7cof.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlmv-7cof"/>`,
		"fallback": "garden:volume-muted-stroke-12",
	});
}

export default Component;
