import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhdv5acbv.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhdv5acbv"/>`,
		"fallback": "picon:shark",
	});
}

export default Component;
