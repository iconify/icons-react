import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo4jxcygl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo4jxcygl"/>`,
		"fallback": "dashicons:tide",
	});
}

export default Component;
