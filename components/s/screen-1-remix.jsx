import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1_i63b4z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f1_i63b4z"/>`,
		"fallback": "streamline-plump:screen-1-remix",
	});
}

export default Component;
