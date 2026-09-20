import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiq111b5p.css';
import '../../css/y/ybd9n1b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oiq111b5p"/><path class="ybd9n1b2l"/>`,
		"fallback": "lineicons:markdown",
	});
}

export default Component;
