import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms3tv4bhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms3tv4bhk"/>`,
		"fallback": "circum:stopwatch",
	});
}

export default Component;
