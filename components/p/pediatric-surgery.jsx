import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp9481b1v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gp9481b1v"/>`,
		"fallback": "healthicons:pediatric-surgery",
	});
}

export default Component;
