import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6c4nob8p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6c4nob8p"/>`,
		"fallback": "streamline-plump:moon-stars",
	});
}

export default Component;
