import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxqv83arr.css';
import '../../css/u/ub6441bsg.css';
import '../../css/g/gv5rgxxwr.css';
import '../../css/v/v46merb6a.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxqv83arr"/><path class="ub6441bsg"/><path class="gv5rgxxwr"/><path class="v46merb6a"/>`,
		"fallback": "tabler-flags:spain",
	});
}

export default Component;
