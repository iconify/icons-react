import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm-9bbu2i.css';
import '../../css/w/wqk418y-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sm-9bbu2i"/><path class="wqk418y-d"/>`,
		"fallback": "boxicons:ticket",
	});
}

export default Component;
