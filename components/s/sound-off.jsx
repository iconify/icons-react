import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4vd1d3fo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4vd1d3fo"/>`,
		"fallback": "andrsrxn:sound-off",
	});
}

export default Component;
