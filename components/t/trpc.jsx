import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqp6v8l5a.css';
import '../../css/z/zehpl8bdy.css';
import '../../css/l/llganab6s.css';
import '../../css/z/zyt9kcsds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqp6v8l5a"/><path class="zehpl8bdy"/><path class="llganab6s"/><path class="zyt9kcsds"/>`,
		"fallback": "bxl:trpc",
	});
}

export default Component;
