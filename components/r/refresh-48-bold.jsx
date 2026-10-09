import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hweq7gb3i.css';
import '../../css/v/v536k8--o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hweq7gb3i"/><path class="v536k8--o"/>`,
		"fallback": "energy-icons:refresh-48-bold",
	});
}

export default Component;
