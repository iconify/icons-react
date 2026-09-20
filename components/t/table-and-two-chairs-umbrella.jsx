import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omeljc3-r.css';
import '../../css/s/sz6wmubsl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omeljc3-r"/><path class="sz6wmubsl"/>`,
		"fallback": "roentgen:table-and-two-chairs-umbrella",
	});
}

export default Component;
