import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp7m-5bvn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp7m-5bvn"/>`,
		"fallback": "fa7-solid:spray-can",
	});
}

export default Component;
