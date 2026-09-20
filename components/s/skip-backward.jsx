import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qeqly5bud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qeqly5bud"/>`,
		"fallback": "mdi:skip-backward",
	});
}

export default Component;
