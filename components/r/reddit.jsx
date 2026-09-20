import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqu5lsb_r.css';
import '../../css/e/e09mkx9uq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqu5lsb_r"/><path clip-rule="evenodd" class="e09mkx9uq"/>`,
		"fallback": "lineicons:reddit",
	});
}

export default Component;
