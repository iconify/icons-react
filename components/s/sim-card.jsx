import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbokte67o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbokte67o"/>`,
		"fallback": "uit:sim-card",
	});
}

export default Component;
