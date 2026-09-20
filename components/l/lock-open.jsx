import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-v8y7ptm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-v8y7ptm"/>`,
		"fallback": "zondicons:lock-open",
	});
}

export default Component;
