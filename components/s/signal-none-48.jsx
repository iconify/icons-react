import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqwy2slfp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqwy2slfp"/>`,
		"fallback": "energy-icons:signal-none-48",
	});
}

export default Component;
