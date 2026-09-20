import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stp3e0b8u.css';
import '../../css/j/jmadxbr5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stp3e0b8u"/><path class="jmadxbr5l"/>`,
		"fallback": "token:rdd",
	});
}

export default Component;
