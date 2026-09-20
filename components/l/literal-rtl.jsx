import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz42h5tvc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz42h5tvc"/>`,
		"fallback": "ooui:literal-rtl",
	});
}

export default Component;
