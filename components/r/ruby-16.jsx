import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g95454bvr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g95454bvr"/>`,
		"fallback": "octicon:ruby-16",
	});
}

export default Component;
