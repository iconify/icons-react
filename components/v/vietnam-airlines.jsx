import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g34etlb1b.css';

const viewBox = {"width":1515,"height":912};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g34etlb1b"/>`,
		"fallback": "thesvg:vietnam-airlines",
	});
}

export default Component;
