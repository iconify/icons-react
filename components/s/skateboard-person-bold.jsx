import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_w4jxb3q.css';
import '../../css/r/r1jer6arw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_w4jxb3q"/><path class="r1jer6arw"/>`,
		"fallback": "streamline-ultimate:skateboard-person-bold",
	});
}

export default Component;
