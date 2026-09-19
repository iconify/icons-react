import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phof8m8ve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phof8m8ve"/>`,
		"fallback": "cbi:panel-glass-door-open",
	});
}

export default Component;
