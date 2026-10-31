import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwbr22b9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwbr22b9w"/>`,
		"fallback": "coolicons:wavy-help-round",
	});
}

export default Component;
