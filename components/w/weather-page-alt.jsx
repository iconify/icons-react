import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmo1cxy0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmo1cxy0w"/>`,
		"fallback": "cbi:weather-page-alt",
	});
}

export default Component;
