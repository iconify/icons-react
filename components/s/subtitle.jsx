import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suh7nhtmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suh7nhtmj"/>`,
		"fallback": "reicon:subtitle",
	});
}

export default Component;
