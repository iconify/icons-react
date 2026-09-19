import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg4076o2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg4076o2w"/>`,
		"fallback": "cbi:symfonisk-lampe",
	});
}

export default Component;
