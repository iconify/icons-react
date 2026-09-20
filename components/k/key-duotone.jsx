import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itvzdpbdp.css';
import '../../css/z/ztsty7m5x.css';
import '../../css/j/jrpdl_7pf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itvzdpbdp"/><rect class="ztsty7m5x"/><path clip-rule="evenodd" class="jrpdl_7pf"/>`,
		"fallback": "lets-icons:key-duotone",
	});
}

export default Component;
