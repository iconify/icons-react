import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yag0wmb3y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yag0wmb3y"/>`,
		"fallback": "osmic:sikhist-14",
	});
}

export default Component;
