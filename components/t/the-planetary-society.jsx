import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo7_cnbhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo7_cnbhx"/>`,
		"fallback": "thesvg:the-planetary-society",
	});
}

export default Component;
