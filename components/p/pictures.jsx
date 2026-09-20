import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxq8y6y1w.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxq8y6y1w"/>`,
		"fallback": "picon:pictures",
	});
}

export default Component;
