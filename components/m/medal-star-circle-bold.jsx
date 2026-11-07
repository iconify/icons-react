import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss1pzwrkh.css';
import '../../css/z/zn22gsbin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ss1pzwrkh"/><path class="zn22gsbin"/>`,
		"fallback": "solar:medal-star-circle-bold",
	});
}

export default Component;
