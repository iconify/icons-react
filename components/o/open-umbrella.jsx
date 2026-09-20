import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p09rohk0m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p09rohk0m"/>`,
		"fallback": "streamline-plump:open-umbrella",
	});
}

export default Component;
