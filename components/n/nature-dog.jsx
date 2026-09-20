import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my4523brj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="my4523brj"/>`,
		"fallback": "streamline-block:nature-dog",
	});
}

export default Component;
