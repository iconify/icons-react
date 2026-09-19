import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy3q7pbtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy3q7pbtj"/>`,
		"fallback": "cbi:panel-glass-door2-open",
	});
}

export default Component;
