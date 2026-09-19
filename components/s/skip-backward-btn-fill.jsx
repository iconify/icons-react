import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzv6z5blv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzv6z5blv"/>`,
		"fallback": "bi:skip-backward-btn-fill",
	});
}

export default Component;
