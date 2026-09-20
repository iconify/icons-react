import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk1cacbgq.css';
import '../../css/w/whi2f_bck.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk1cacbgq"/><path class="whi2f_bck"/>`,
		"fallback": "lineicons:island-2",
	});
}

export default Component;
