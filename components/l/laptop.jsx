import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlka0ibzd.css';

const viewBox = {"width":1024,"height":832};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlka0ibzd"/>`,
		"fallback": "whh:laptop",
	});
}

export default Component;
