import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae_8ftbeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ae_8ftbeg"/>`,
		"fallback": "keyline-icons:square-bar-chart-horizontal-start-sharp-fill",
	});
}

export default Component;
