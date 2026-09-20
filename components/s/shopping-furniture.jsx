import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y38j07b8s.css';
import '../../css/g/gco7s4pcr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y38j07b8s"/><path class="gco7s4pcr"/>`,
		"fallback": "streamline-block:shopping-furniture",
	});
}

export default Component;
