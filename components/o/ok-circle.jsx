import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqj_9dcii.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqj_9dcii"/>`,
		"fallback": "websymbol:ok-circle",
	});
}

export default Component;
