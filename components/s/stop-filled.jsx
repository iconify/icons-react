import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g892u-omi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g892u-omi"/>`,
		"fallback": "reicon:stop-filled",
	});
}

export default Component;
