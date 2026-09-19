import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/soso3u_zk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="soso3u_zk"/>`,
		"fallback": "dashicons:reddit",
	});
}

export default Component;
