import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tri6pru9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tri6pru9e"/>`,
		"fallback": "lucide:skip-back",
	});
}

export default Component;
