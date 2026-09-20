import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew4hn1bwx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew4hn1bwx"/>`,
		"fallback": "pinhead:telegraph-key",
	});
}

export default Component;
