import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmrm1ub4g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmrm1ub4g"/>`,
		"fallback": "streamline:triangle-arrow-curvy-up-down-2-remix",
	});
}

export default Component;
