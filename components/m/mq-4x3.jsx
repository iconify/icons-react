import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wuy3_33xc.css';
import '../../css/p/p3uaq9bss.css';
import '../../css/a/a4ahv-08i.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wuy3_33xc"/><path class="p3uaq9bss"/><path class="a4ahv-08i"/>`,
		"fallback": "flag:mq-4x3",
	});
}

export default Component;
