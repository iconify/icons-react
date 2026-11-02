import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpfgwbc_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpfgwbc_a"/>`,
		"fallback": "mingcute:minus-circle-dash-line",
	});
}

export default Component;
