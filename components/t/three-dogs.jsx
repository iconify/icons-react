import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i24d3zwii.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i24d3zwii"/>`,
		"fallback": "pinhead:three-dogs",
	});
}

export default Component;
