import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyhwb4bbg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyhwb4bbg"/>`,
		"fallback": "icomoon-free:shrink",
	});
}

export default Component;
