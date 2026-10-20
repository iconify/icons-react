import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxvbik02p.css';
import '../../css/a/adx6enbvx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxvbik02p"/><path class="adx6enbvx"/>`,
		"fallback": "energy-icons:message-sparkle-20-bold",
	});
}

export default Component;
