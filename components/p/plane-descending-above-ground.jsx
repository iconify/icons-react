import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqzszg6lw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqzszg6lw"/>`,
		"fallback": "pinhead:plane-descending-above-ground",
	});
}

export default Component;
