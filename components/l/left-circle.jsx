import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4ofafy9m.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4ofafy9m"/>`,
		"fallback": "websymbol:left-circle",
	});
}

export default Component;
