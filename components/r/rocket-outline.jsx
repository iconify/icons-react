import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw55_xb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw55_xb1l"/>`,
		"fallback": "mdi:rocket-outline",
	});
}

export default Component;
