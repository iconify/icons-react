import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apskv5bzp.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apskv5bzp"/>`,
		"fallback": "f7:suit-diamond-fill",
	});
}

export default Component;
