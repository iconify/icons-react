import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxmw32r0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxmw32r0y"/>`,
		"fallback": "mdi-light:vector-intersection",
	});
}

export default Component;
