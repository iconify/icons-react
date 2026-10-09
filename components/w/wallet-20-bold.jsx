import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8ckwu0tw.css';
import '../../css/q/qgpi-ab8l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8ckwu0tw"/><path class="qgpi-ab8l"/>`,
		"fallback": "energy-icons:wallet-20-bold",
	});
}

export default Component;
