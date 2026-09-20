import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovr3h0b9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovr3h0b9f"/>`,
		"fallback": "reicon:stopwatch-off-filled",
	});
}

export default Component;
