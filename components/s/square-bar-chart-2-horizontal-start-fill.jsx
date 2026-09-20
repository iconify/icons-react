import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzvv3hf9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mzvv3hf9a"/>`,
		"fallback": "keyline-icons:square-bar-chart-2-horizontal-start-fill",
	});
}

export default Component;
