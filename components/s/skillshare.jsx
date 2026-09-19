import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn78bu-1w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn78bu-1w"/>`,
		"fallback": "cib:skillshare",
	});
}

export default Component;
