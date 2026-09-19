import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6zmvbcdq.css';

const viewBox = {"width":717,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6zmvbcdq"/>`,
		"fallback": "ls:picasa",
	});
}

export default Component;
