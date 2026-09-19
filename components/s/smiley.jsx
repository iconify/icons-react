import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-8gtcm1e.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-8gtcm1e"/>`,
		"fallback": "f7:smiley",
	});
}

export default Component;
