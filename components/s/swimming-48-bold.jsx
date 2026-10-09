import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozrn3bc7z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozrn3bc7z"/>`,
		"fallback": "energy-icons:swimming-48-bold",
	});
}

export default Component;
