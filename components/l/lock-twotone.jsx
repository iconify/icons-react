import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh0_ewbrk.css';
import '../../css/b/bwbmeku4p.css';
import '../../css/y/yp5ecdcuz.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh0_ewbrk"/><path class="bwbmeku4p"/><path class="yp5ecdcuz"/>`,
		"fallback": "ant-design:lock-twotone",
	});
}

export default Component;
