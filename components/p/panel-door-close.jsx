import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhowiacgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhowiacgd"/>`,
		"fallback": "cbi:panel-door-close",
	});
}

export default Component;
