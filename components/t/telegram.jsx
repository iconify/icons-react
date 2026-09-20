import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd8mwpbme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd8mwpbme"/>`,
		"fallback": "meteor-icons:telegram",
	});
}

export default Component;
