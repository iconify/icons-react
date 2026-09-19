import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8te-0b8i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8te-0b8i"/>`,
		"fallback": "codicon:play",
	});
}

export default Component;
