import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks99qt2hl.css';
import '../../css/e/eh8-ivaqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks99qt2hl"/><path class="eh8-ivaqu"/>`,
		"fallback": "prime:step-backward",
	});
}

export default Component;
