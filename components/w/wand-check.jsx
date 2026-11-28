import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpc_mmbiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpc_mmbiz"/>`,
		"fallback": "noviair:wand-check",
	});
}

export default Component;
