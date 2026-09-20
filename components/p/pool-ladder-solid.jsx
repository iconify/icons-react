import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcr4y4byo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lcr4y4byo"/>`,
		"fallback": "streamline-plump:pool-ladder-solid",
	});
}

export default Component;
