import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_4vr29tc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_4vr29tc"/>`,
		"fallback": "carbon:pause-outline-filled",
	});
}

export default Component;
