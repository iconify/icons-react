import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xce91zbag.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xce91zbag"/>`,
		"fallback": "fa-solid:oil-can",
	});
}

export default Component;
