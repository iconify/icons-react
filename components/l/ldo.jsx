import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_yzt2k0i.css';
import '../../css/b/b_9exq3et.css';
import '../../css/a/aagrbllbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_yzt2k0i"/><path class="b_9exq3et"/><path class="aagrbllbb"/>`,
		"fallback": "token:ldo",
	});
}

export default Component;
