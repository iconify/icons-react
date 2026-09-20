import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8xu4hqsm.css';

const viewBox = {"width":142.8,"height":35.2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8xu4hqsm"/>`,
		"fallback": "thesvg-color:onelogin",
	});
}

export default Component;
