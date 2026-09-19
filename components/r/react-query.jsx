import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtz70zbrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtz70zbrt"/>`,
		"fallback": "bxl:react-query",
	});
}

export default Component;
