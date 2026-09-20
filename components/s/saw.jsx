import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3ru6rbxu.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3ru6rbxu"/>`,
		"fallback": "picon:saw",
	});
}

export default Component;
