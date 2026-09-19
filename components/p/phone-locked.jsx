import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzej9cc4z.css';

const viewBox = {"width":384,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzej9cc4z"/>`,
		"fallback": "zmdi:phone-locked",
	});
}

export default Component;
