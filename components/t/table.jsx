import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyw4_cb3t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyw4_cb3t"/>`,
		"fallback": "uiw:table",
	});
}

export default Component;
