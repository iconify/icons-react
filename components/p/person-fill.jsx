import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx-8-ebcm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx-8-ebcm"/>`,
		"fallback": "bi:person-fill",
	});
}

export default Component;
