import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq5mre2ch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yq5mre2ch"/>`,
		"fallback": "mingcute:layout-3-fill",
	});
}

export default Component;
