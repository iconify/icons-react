import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw4g0-bgr.css';

const viewBox = {"width":28,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw4g0-bgr"/>`,
		"fallback": "fontisto:surgical-knife",
	});
}

export default Component;
