import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qga7rpbkj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qga7rpbkj"/>`,
		"fallback": "icon-park:tiktok",
	});
}

export default Component;
