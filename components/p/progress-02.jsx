import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xa3zdn2mq.css';
import '../../css/x/xl4l0lvlu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="xa3zdn2mq"/><path class="xl4l0lvlu"/></g>`,
		"fallback": "hugeicons:progress-02",
	});
}

export default Component;
