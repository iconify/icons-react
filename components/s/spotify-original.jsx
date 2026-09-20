import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk2j-_b-u.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk2j-_b-u"/>`,
		"fallback": "lineicons:spotify-original",
	});
}

export default Component;
