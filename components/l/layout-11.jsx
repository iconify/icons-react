import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2-lxn0av.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2-lxn0av"/>`,
		"fallback": "streamline-ultimate:layout-11",
	});
}

export default Component;
