import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h63zrzbmn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h63zrzbmn"/>`,
		"fallback": "selfhst:owntracks",
	});
}

export default Component;
