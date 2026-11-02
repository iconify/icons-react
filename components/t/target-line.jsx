import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxy6v3jpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxy6v3jpb"/>`,
		"fallback": "mingcute:target-line",
	});
}

export default Component;
