import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4la9-n2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4la9-n2x"/>`,
		"fallback": "thesvg:resurrection-remix-os",
	});
}

export default Component;
