import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp4oqwbqh.css';
import '../../css/i/iynmzp4ho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp4oqwbqh"/><circle class="iynmzp4ho"/>`,
		"fallback": "lets-icons:temperature",
	});
}

export default Component;
