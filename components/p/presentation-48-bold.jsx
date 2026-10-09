import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cze6f6b6k.css';
import '../../css/u/un6m0jq1u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cze6f6b6k"/><path class="un6m0jq1u"/>`,
		"fallback": "energy-icons:presentation-48-bold",
	});
}

export default Component;
