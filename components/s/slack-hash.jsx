import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-0k38b_l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-0k38b_l"/>`,
		"fallback": "la:slack-hash",
	});
}

export default Component;
