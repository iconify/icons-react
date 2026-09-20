import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja3mrtbir.css';
import '../../css/n/nmhwd39xk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ja3mrtbir"/><path class="nmhwd39xk"/>`,
		"fallback": "lets-icons:key-fill",
	});
}

export default Component;
