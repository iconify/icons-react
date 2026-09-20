import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe81y5u7f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe81y5u7f"/>`,
		"fallback": "roentgen:rape-2",
	});
}

export default Component;
