import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyw1c2bvh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyw1c2bvh"/>`,
		"fallback": "codicon:symbol-snippet",
	});
}

export default Component;
