import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpgpy7-6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpgpy7-6o"/>`,
		"fallback": "thesvg-color:jabber",
	});
}

export default Component;
