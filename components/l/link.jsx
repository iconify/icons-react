import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmxkbubax.css';
import '../../css/q/qrl3wtblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmxkbubax"/><path class="qrl3wtblh"/>`,
		"fallback": "pixel:link",
	});
}

export default Component;
