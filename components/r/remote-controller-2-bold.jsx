import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqbs--b0w.css';
import '../../css/u/uoax7obne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqbs--b0w"/><path clip-rule="evenodd" class="uoax7obne"/>`,
		"fallback": "solar:remote-controller-2-bold",
	});
}

export default Component;
