import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd39-q0pv.css';

const viewBox = {"width":560,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd39-q0pv"/>`,
		"fallback": "il:mic",
	});
}

export default Component;
