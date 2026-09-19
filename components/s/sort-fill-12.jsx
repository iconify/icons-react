import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oevo7ab1f.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oevo7ab1f"/>`,
		"fallback": "garden:sort-fill-12",
	});
}

export default Component;
