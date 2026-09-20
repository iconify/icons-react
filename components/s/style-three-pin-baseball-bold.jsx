import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obu_zh1ok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obu_zh1ok"/>`,
		"fallback": "streamline-ultimate:style-three-pin-baseball-bold",
	});
}

export default Component;
