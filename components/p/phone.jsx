import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj49vpb9c.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kj49vpb9c"/>`,
		"fallback": "zmdi:phone",
	});
}

export default Component;
