import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvbtkp-2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvbtkp-2a"/>`,
		"fallback": "mingcute:solar-panel-fill",
	});
}

export default Component;
