import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1udlpbfw.css';

const viewBox = {"width":432,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1udlpbfw"/>`,
		"fallback": "ps:pull",
	});
}

export default Component;
