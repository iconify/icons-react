import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn7x1rbud.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn7x1rbud"/>`,
		"fallback": "streamline-plump:multiple-stars",
	});
}

export default Component;
