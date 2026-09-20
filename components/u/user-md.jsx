import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4j3tp8lk.css';
import '../../css/d/dx--x-tgw.css';
import '../../css/u/uz0w99dfp.css';
import '../../css/j/jxxmdd81o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4j3tp8lk"/><path class="dx--x-tgw"/><path class="uz0w99dfp"/><path class="jxxmdd81o"/>`,
		"fallback": "uim:user-md",
	});
}

export default Component;
