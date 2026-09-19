import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2z8niypl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2z8niypl"/>`,
		"fallback": "cbi:nspro-panel",
	});
}

export default Component;
