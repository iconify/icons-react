import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e27r4wb4q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e27r4wb4q"/>`,
		"fallback": "streamline-plump:tiktok-solid",
	});
}

export default Component;
