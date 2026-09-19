import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwr2e0b0q.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwr2e0b0q"/>`,
		"fallback": "foundation:quote",
	});
}

export default Component;
