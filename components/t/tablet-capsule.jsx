import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfh6n882y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfh6n882y"/>`,
		"fallback": "streamline:tablet-capsule",
	});
}

export default Component;
