import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am_i4l4_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am_i4l4_i"/>`,
		"fallback": "pixel:share",
	});
}

export default Component;
