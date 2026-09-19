import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anrso3m5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anrso3m5r"/>`,
		"fallback": "cbi:vac-filter",
	});
}

export default Component;
