import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihj0scc-n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihj0scc-n"/>`,
		"fallback": "pinhead:kansas-with-capital-star",
	});
}

export default Component;
