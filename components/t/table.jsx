import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw-wv0b3u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mw-wv0b3u"/>`,
		"fallback": "jam:table",
	});
}

export default Component;
