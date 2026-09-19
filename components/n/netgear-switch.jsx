import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thiri6b6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thiri6b6n"/>`,
		"fallback": "cbi:netgear-switch",
	});
}

export default Component;
