import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc24c_b4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc24c_b4g"/>`,
		"fallback": "mingcute:profile-2-line",
	});
}

export default Component;
