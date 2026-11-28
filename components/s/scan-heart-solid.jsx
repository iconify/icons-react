import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tas1uj8qs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tas1uj8qs"/>`,
		"fallback": "iconaut:scan-heart-solid",
	});
}

export default Component;
