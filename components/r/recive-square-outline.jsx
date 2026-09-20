import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8eqfsbjd.css';
import '../../css/e/e-4ze4bgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8eqfsbjd"/><path clip-rule="evenodd" class="e-4ze4bgm"/>`,
		"fallback": "solar:recive-square-outline",
	});
}

export default Component;
