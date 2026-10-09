import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgpvo8_dp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgpvo8_dp"/>`,
		"fallback": "energy-icons:surf-48",
	});
}

export default Component;
