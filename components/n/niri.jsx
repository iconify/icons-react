import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otgaq2u1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otgaq2u1n"/>`,
		"fallback": "thesvg:niri",
	});
}

export default Component;
