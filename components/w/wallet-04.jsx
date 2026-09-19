import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/ys6qqhgct.css';
import '../../css/m/mlrvhxo2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ys6qqhgct"/><path class="mlrvhxo2j"/></g>`,
		"fallback": "hugeicons:wallet-04",
	});
}

export default Component;
