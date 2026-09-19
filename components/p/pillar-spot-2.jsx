import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4u-8pacx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4u-8pacx"/>`,
		"fallback": "cbi:pillar-spot-2",
	});
}

export default Component;
