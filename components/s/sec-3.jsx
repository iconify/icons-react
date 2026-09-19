import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmpycxb5a.css';

const viewBox = {"width":368,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmpycxb5a"/>`,
		"fallback": "zmdi:sec-3",
	});
}

export default Component;
