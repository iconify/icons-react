import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1nbikbny.css';
import '../../css/l/lq958rfxi.css';
import '../../css/y/yy5pkcb2v.css';
import '../../css/v/vhokyxbgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g1nbikbny"/><path class="lq958rfxi"/><path class="yy5pkcb2v"/><path class="vhokyxbgc"/>`,
		"fallback": "solar:sidebar-bold-duotone",
	});
}

export default Component;
