import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm-s4bcxz.css';
import '../../css/b/bwibdw4bb.css';
import '../../css/d/dfqmxp8ok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm-s4bcxz"/><path class="bwibdw4bb"/><path class="dfqmxp8ok"/>`,
		"fallback": "boxicons:meh-alt",
	});
}

export default Component;
