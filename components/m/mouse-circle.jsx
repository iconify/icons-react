import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyu0xf38q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vyu0xf38q"/>`,
		"fallback": "reicon:mouse-circle",
	});
}

export default Component;
