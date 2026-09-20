import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba874dbxc.css';
import '../../css/r/r-_tixcty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba874dbxc"/><path class="r-_tixcty"/>`,
		"fallback": "mingcute:tag-2-line",
	});
}

export default Component;
