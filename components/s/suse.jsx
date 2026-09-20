import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm20wygxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm20wygxl"/>`,
		"fallback": "thesvg-color:suse",
	});
}

export default Component;
