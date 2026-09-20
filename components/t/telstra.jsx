import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkwbkeyej.css';
import '../../css/n/nuaz6vdar.css';

const viewBox = {"width":1455.581,"height":400.711};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkwbkeyej"/><path class="nuaz6vdar"/>`,
		"fallback": "thesvg-color:telstra",
	});
}

export default Component;
