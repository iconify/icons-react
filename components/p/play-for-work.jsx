import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0ui89byk.css';

const viewBox = {"width":256,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0ui89byk"/>`,
		"fallback": "zmdi:play-for-work",
	});
}

export default Component;
