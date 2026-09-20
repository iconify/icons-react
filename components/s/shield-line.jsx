import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqh0-kb-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqh0-kb-q"/>`,
		"fallback": "ri:shield-line",
	});
}

export default Component;
