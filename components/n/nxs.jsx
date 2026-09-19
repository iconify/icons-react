import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywgnk_p2e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywgnk_p2e"/>`,
		"fallback": "cryptocurrency:nxs",
	});
}

export default Component;
