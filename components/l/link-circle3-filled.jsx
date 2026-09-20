import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvj3hy0ml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvj3hy0ml"/>`,
		"fallback": "reicon:link-circle3-filled",
	});
}

export default Component;
