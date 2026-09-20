import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgzsg8svi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgzsg8svi"/>`,
		"fallback": "reicon:trend-down-filled",
	});
}

export default Component;
