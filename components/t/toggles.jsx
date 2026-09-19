import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y75ybwfrp.css';
import '../../css/h/hywly5dak.css';
import '../../css/e/ebmdd0qas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y75ybwfrp"/><path class="hywly5dak"/><path class="ebmdd0qas"/>`,
		"fallback": "boxicons:toggles",
	});
}

export default Component;
