import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrvf3r2kf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrvf3r2kf"/>`,
		"fallback": "andrsrxn:live",
	});
}

export default Component;
