import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yagvpk3ew.css';
import '../../css/k/k5ixoab-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yagvpk3ew"/><path class="k5ixoab-b"/>`,
		"fallback": "mingcute:ufo-line",
	});
}

export default Component;
