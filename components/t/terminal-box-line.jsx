import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb3sirb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb3sirb5m"/>`,
		"fallback": "ri:terminal-box-line",
	});
}

export default Component;
