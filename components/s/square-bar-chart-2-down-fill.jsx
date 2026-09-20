import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtgj7rfhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jtgj7rfhw"/>`,
		"fallback": "keyline-icons:square-bar-chart-2-down-fill",
	});
}

export default Component;
