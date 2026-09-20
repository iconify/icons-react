import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbtb88lyb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbtb88lyb"/>`,
		"fallback": "streamline-plump-color:ok-hand-flat",
	});
}

export default Component;
