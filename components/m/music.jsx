import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si0c0nhwv.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si0c0nhwv"/>`,
		"fallback": "picon:music",
	});
}

export default Component;
