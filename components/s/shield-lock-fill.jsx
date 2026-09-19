import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp2m2eqzd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp2m2eqzd"/>`,
		"fallback": "bi:shield-lock-fill",
	});
}

export default Component;
