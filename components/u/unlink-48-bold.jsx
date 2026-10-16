import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ychemnb4z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ychemnb4z"/>`,
		"fallback": "energy-icons:unlink-48-bold",
	});
}

export default Component;
