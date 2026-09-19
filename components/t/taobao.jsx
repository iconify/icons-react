import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqjbld-4q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqjbld-4q"/>`,
		"fallback": "icon-park-outline:taobao",
	});
}

export default Component;
