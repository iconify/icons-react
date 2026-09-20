import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgi0tgbmh.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgi0tgbmh"/>`,
		"fallback": "lineicons:wallet-1",
	});
}

export default Component;
