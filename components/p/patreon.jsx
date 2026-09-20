import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww0ts7b9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww0ts7b9o"/>`,
		"fallback": "meteor-icons:patreon",
	});
}

export default Component;
