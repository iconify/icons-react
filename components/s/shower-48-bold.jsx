import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyxtagb8j.css';
import '../../css/p/pw9c74c9o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyxtagb8j"/><path class="pw9c74c9o"/>`,
		"fallback": "energy-icons:shower-48-bold",
	});
}

export default Component;
