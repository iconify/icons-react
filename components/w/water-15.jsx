import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svgx0q8ik.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svgx0q8ik"/>`,
		"fallback": "maki:water-15",
	});
}

export default Component;
