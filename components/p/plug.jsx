import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn7eemybl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn7eemybl"/>`,
		"fallback": "fa7-solid:plug",
	});
}

export default Component;
