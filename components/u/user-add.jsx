import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl0smq5gu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl0smq5gu"/>`,
		"fallback": "uiw:user-add",
	});
}

export default Component;
