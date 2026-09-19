import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cazqnib9g.css';

const viewBox = {"width":200,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cazqnib9g"/>`,
		"fallback": "zmdi:unfold-more",
	});
}

export default Component;
