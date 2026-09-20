import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icxhp86hl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icxhp86hl"/>`,
		"fallback": "thesvg-color:piped",
	});
}

export default Component;
