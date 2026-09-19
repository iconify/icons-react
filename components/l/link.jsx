import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trsn-3cdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trsn-3cdj"/>`,
		"fallback": "mono-icons:link",
	});
}

export default Component;
