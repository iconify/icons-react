import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7ses8b9s.css';
import '../../css/s/su9n4xbzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7ses8b9s"/><path clip-rule="evenodd" class="su9n4xbzm"/>`,
		"fallback": "solar:key-minimalistic-square-2-bold",
	});
}

export default Component;
