import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imtb1zu4x.css';
import '../../css/n/nhxejibsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imtb1zu4x"/><path class="nhxejibsg"/>`,
		"fallback": "mingcute:snowstorm-2-fill",
	});
}

export default Component;
