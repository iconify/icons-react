import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm6dfob2b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm6dfob2b"/>`,
		"fallback": "streamline-block:travel-motorcycle",
	});
}

export default Component;
