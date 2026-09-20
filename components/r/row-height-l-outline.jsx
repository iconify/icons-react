import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0jt62teq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0jt62teq"/>`,
		"fallback": "lsicon:row-height-l-outline",
	});
}

export default Component;
