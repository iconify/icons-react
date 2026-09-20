import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk8wbdc9i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk8wbdc9i"/>`,
		"fallback": "octicon:redo-16",
	});
}

export default Component;
