import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eloeuiz0q.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eloeuiz0q"/>`,
		"fallback": "picon:pc",
	});
}

export default Component;
