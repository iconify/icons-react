import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7kfgg1tg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7kfgg1tg"/>`,
		"fallback": "iconamoon:menu-burger-vertical-light",
	});
}

export default Component;
