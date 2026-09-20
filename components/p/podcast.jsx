import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spa_k7f-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="spa_k7f-b"/>`,
		"fallback": "reicon:podcast",
	});
}

export default Component;
